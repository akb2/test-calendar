import type { nextMonth, prevMonth, setDate } from "./slice";

export type CalendarState = {
  year: number;
  month: number;
};

export type CalendarAction =
  | ReturnType<typeof setDate>
  | ReturnType<typeof nextMonth>
  | ReturnType<typeof prevMonth>;
