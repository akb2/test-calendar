import { combineEpics } from "redux-observable";
import {
  catchError,
  distinctUntilChanged,
  map,
  of,
  switchMap,
  tap,
} from "rxjs";
import { GetSelectedDate } from "../../api/Calendar";
import {
  AfterMonth,
  AfterMonthYear,
  BeforeMonth,
  BeforeMonthYear,
} from "../../utils/Date";
import { appInitAction } from "../actions";
import { CreateEffect } from "../utils";
import { nextMonth, prevMonth, setDate } from "./slice";

const pageInitEpic = CreateEffect(
  appInitAction.type,
  distinctUntilChanged((a, b) => a.action.type === b.action.type),
  tap(console.log),
  switchMap((data) =>
    GetSelectedDate().pipe(
      map(() => data),
      catchError(() => of(data)),
    ),
  ),
  map(({ state }) =>
    setDate({
      month: state.calendar.month,
      year: state.calendar.year,
    }),
  ),
);

const nextMonthEpic = CreateEffect(
  nextMonth.type,
  map(({ state }) =>
    setDate({
      month: AfterMonth(state.calendar.month),
      year: AfterMonthYear(state.calendar.month, state.calendar.year),
    }),
  ),
);

const prevMonthEpic = CreateEffect(
  prevMonth.type,
  map(({ state }) =>
    setDate({
      month: BeforeMonth(state.calendar.month),
      year: BeforeMonthYear(state.calendar.month, state.calendar.year),
    }),
  ),
);

export const calendarEpic = combineEpics(
  pageInitEpic,
  nextMonthEpic,
  prevMonthEpic,
);
