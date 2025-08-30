import { combineEpics } from "redux-observable";
import { catchError, distinctUntilChanged, map, of, switchMap } from "rxjs";
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

CreateEffect(
  appInitAction.type,
  map((data) => data),
);

const pageInitEpic = CreateEffect(
  appInitAction.type,
  distinctUntilChanged((a, b) => a.action.type === b.action.type),
  switchMap((data) =>
    GetSelectedDate().pipe(catchError(() => of(data.state.calendar))),
  ),
  map(setDate),
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
