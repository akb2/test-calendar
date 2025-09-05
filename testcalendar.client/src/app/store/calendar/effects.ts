import { combineEpics } from "redux-observable";
import { catchError, distinctUntilChanged, map, of, switchMap } from "rxjs";
import { GetSelectedDate, SetSelectedDate } from "../../api/Calendar";
import {
  AfterMonth,
  AfterMonthYear,
  BeforeMonth,
  BeforeMonthYear,
} from "../../utils/Date";
import { appInitAction } from "../actions";
import type { AppActions, RootState } from "../types";
import { CreateEffect } from "../utils";
import {
  nextMonth,
  prevMonth,
  saveDate,
  setDate,
  startLoader,
  stopLoader,
} from "./slice";

const startLoaderEpic = CreateEffect(
  [appInitAction.type, saveDate.type],
  map(() => startLoader()),
);

const pageInitLoadDateEpic = CreateEffect(
  appInitAction.type,
  distinctUntilChanged((a, b) => a.action.type === b.action.type),
  switchMap((data) =>
    GetSelectedDate().pipe(catchError(() => of(data.state.calendar))),
  ),
  map(({ month, year }) => setDate({ month, year, loading: false })),
  catchError(() => of(stopLoader())),
);

const nextMonthEpic = CreateEffect(
  nextMonth.type,
  map(({ state }) =>
    saveDate({
      month: AfterMonth(state.calendar.month),
      year: AfterMonthYear(state.calendar.month, state.calendar.year),
    }),
  ),
);

const prevMonthEpic = CreateEffect(
  prevMonth.type,
  map(({ state }) =>
    saveDate({
      month: BeforeMonth(state.calendar.month),
      year: BeforeMonthYear(state.calendar.month, state.calendar.year),
    }),
  ),
);

const saveDateEpic = CreateEffect(
  saveDate.type,
  switchMap(({ action: { payload } }) =>
    SetSelectedDate(payload!).pipe(
      map(() => setDate({ ...payload!, loading: false })),
      catchError(() => of(stopLoader())),
    ),
  ),
);

export const calendarEpic = combineEpics<AppActions, AppActions, RootState>(
  startLoaderEpic,
  saveDateEpic,
  nextMonthEpic,
  pageInitLoadDateEpic,
  prevMonthEpic,
);
