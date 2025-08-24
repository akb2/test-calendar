import { combineEpics } from "redux-observable";
import {
  AfterMonth,
  AfterMonthYear,
  BeforeMonth,
  BeforeMonthYear,
} from "../../utils/Date";
import { CreateEffect } from "../utils";
import { nextMonth, prevMonth, setDate } from "./slice";

const nextMonthEpic = CreateEffect(nextMonth.type, ({ state }) =>
  setDate({
    month: AfterMonth(state.calendar.month),
    year: AfterMonthYear(state.calendar.month, state.calendar.year),
  }),
);

const prevMonthEpic = CreateEffect(prevMonth.type, ({ state }) =>
  setDate({
    month: BeforeMonth(state.calendar.month),
    year: BeforeMonthYear(state.calendar.month, state.calendar.year),
  }),
);

export const calendarEpic = combineEpics(nextMonthEpic, prevMonthEpic);
