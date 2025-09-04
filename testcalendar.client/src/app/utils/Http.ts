import { Observable } from "rxjs";
import type { Nullable } from "../models/App";
import type { HttpMethod } from "../models/Http";

const Request = <O, I extends Nullable<object> = undefined>(
  url: string,
  method: HttpMethod,
  body?: I,
): Observable<O> =>
  new Observable((observer) => {
    fetch(url, { method, body: !!body ? JSON.stringify(body) : undefined })
      .then(async (responce) => {
        if (responce.ok) {
          try {
            return observer.next((await responce.json()) as O);
          } catch (error) {
            observer.error(error);
          }
        } else {
          observer.error(responce);
        }
      })
      .catch((error) => observer.error(error));
  });

export const Get = <O>(url: string) => Request<O>(url, "GET");

export const Post = <O, I extends object>(url: string, body: I) =>
  Request<O, I>(url, "POST", body);

export const Put = <O, I extends object>(url: string, body: I) =>
  Request<O, I>(url, "PUT", body);
