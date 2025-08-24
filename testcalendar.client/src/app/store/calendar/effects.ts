import { combineEpics, ofType, StateObservable } from "redux-observable";
import type { Observable } from "rxjs";
import { map, tap, withLatestFrom } from "rxjs/operators";
import {
  AfterMonth,
  AfterMonthYear,
  BeforeMonth,
  BeforeMonthYear,
} from "../../utils/Date";
import type { RootState } from "../types";
import { nextMonth, prevMonth, setDate } from "./slice";
import type { CalendarAction } from "./types";

const nextMonthEpic = (
  action$: Observable<CalendarAction>,
  state$: StateObservable<RootState>,
) =>
  action$.pipe(
    tap(console.log),
    ofType(nextMonth.type),
    withLatestFrom(state$),
    map(([_, state]) => {
      console.log(_, state);
      const { year, month } = state.calendar;

      return setDate({
        month: AfterMonth(month),
        year: AfterMonthYear(month, year),
      });
    }),
  );

const prevMonthEpic = (
  action$: Observable<CalendarAction>,
  state$: StateObservable<RootState>,
) =>
  action$.pipe(
    ofType(prevMonth.type),
    withLatestFrom(state$),
    map(([_, state]) => {
      const { year, month } = state.calendar;

      return setDate({
        month: BeforeMonth(month),
        year: BeforeMonthYear(month, year),
      });
    }),
  );

export const calendarEpic = combineEpics(nextMonthEpic, prevMonthEpic);
