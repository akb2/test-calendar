import { combineEpics, ofType, StateObservable } from "redux-observable";
import { map, withLatestFrom } from "rxjs/operators";
import {
  AfterMonth,
  AfterMonthYear,
  BeforeMonth,
  BeforeMonthYear,
} from "../../utils/Date";
import type { RootState } from "../types";
import { nextMonth, prevMonth, setDate } from "./slice";

const nextMonthEpic = (action$: any, state$: StateObservable<RootState>) =>
  action$.pipe(
    ofType(nextMonth.type),
    withLatestFrom(state$),
    map(([_, state]) => {
      const { year, month } = state.value.calendar;

      return setDate({
        month: AfterMonth(month),
        year: AfterMonthYear(month, year),
      });
    }),
  );

const prevMonthEpic = (action$: any, state$: StateObservable<RootState>) =>
  action$.pipe(
    ofType(prevMonth.type),
    withLatestFrom(state$),
    map(([_, state]) => {
      const { year, month } = state.value.calendar;

      return setDate({
        month: BeforeMonth(month),
        year: BeforeMonthYear(month, year),
      });
    }),
  );

export const calendarEpic = combineEpics(nextMonthEpic, prevMonthEpic);
