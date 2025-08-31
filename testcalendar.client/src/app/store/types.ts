import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import type { Epic } from "redux-observable";
import type { appInitAction } from "./actions";
import type { CalendarAction, CalendarState } from "./calendar/types";

export interface RootState {
  calendar: CalendarState;
}

export type AppActions = ReturnType<typeof appInitAction> | CalendarAction;

export type AppDispatch = Dispatch<AppActions>;

export type CreateEffectCallback<Out extends AppActions> = Epic<
  AppActions,
  Out,
  RootState
>;

export interface EffectData {
  action: AppActions;
  state: RootState;
}

export type ActionData<
  T extends object,
  RK extends keyof T = keyof T,
  R extends string = string,
> = PayloadAction<Pick<T, RK> & Partial<T>, R>;
