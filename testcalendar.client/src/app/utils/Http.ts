import { Observable } from "rxjs";
import { httpCode } from "../data/Http";
import type { Nullable } from "../models/App";
import type { HttpMethod } from "../models/Http";

const Request = <O, I extends Nullable<object> = undefined>(
  url: string,
  method: HttpMethod,
  body?: I,
): Observable<O> =>
  new Observable((observer) => {
    const data: RequestInit = {
      method,
      body: !!body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const errorHandler = <T>(error: T) => {
      observer.error(error);
      observer.complete();
    };

    fetch(url, data)
      .then(async (responce) => {
        if (responce.ok) {
          try {
            const data =
              responce.status === httpCode.noContent
                ? undefined
                : await responce.json();

            observer.next(data as O);
            observer.complete();
          } catch (error) {
            errorHandler(error);
          }
        } else {
          errorHandler(responce);
        }
      })
      .catch(errorHandler);
  });

export const Get = <O>(url: string) => Request<O>(url, "GET");

export const Post = <O, I extends object>(url: string, body: I) =>
  Request<O, I>(url, "POST", body);

export const Put = <O, I extends object>(url: string, body: I) =>
  Request<O, I>(url, "PUT", body);
