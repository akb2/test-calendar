import type { Dispatch } from "@reduxjs/toolkit";
import type { StateObservable } from "redux-observable";
import type { Observable } from "rxjs";
import type { appInitAction } from "./actions";
import type { CalendarAction, CalendarState } from "./calendar/types";

export interface RootState {
  calendar: CalendarState;
}

export type AppActions = ReturnType<typeof appInitAction> | CalendarAction;

export type AppDispatch = Dispatch<AppActions>;

export type CreateEffectCallback<T> = (
  action$: Observable<AppActions>,
  state$: StateObservable<RootState>,
) => Observable<T>;

export interface EffectData {
  action: CalendarAction;
  state: RootState;
}
