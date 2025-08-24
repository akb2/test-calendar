import type { Dispatch } from "@reduxjs/toolkit";
import type { CalendarAction, CalendarState } from "./calendar/types";

export interface RootState {
  calendar: CalendarState;
}

export type AppAction = CalendarAction;

export type AppDispatch = Dispatch<AppAction>;
