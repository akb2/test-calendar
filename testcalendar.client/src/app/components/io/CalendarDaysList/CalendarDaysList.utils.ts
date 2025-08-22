import { CurrentDateTimer } from "../../../utils/Date";
import { UpdateInterval } from "./CalendarDaysList.const";
import type { MonthDaysList } from "./CalendarDaysList.types";

const DaysInMonth = (month: number, year: number) =>
  new Date(year, month + 1, 0).getDate();

const BeforeMonth = (month: number) => (month > 0 ? month - 1 : 11);
const BeforeMonthYear = (month: number, year: number) =>
  month > 0 ? year : year - 1;

export const GetMonthDays = (
  mixedMonth?: number,
  mixedYear?: number,
): MonthDaysList => {
  const date = CurrentDateTimer(UpdateInterval);
  const year = mixedYear ?? date.getFullYear();
  const month = mixedMonth ?? date.getMonth();
  const maxDay = DaysInMonth(month, year);
  const beforeMaxDay = DaysInMonth(
    BeforeMonth(month),
    BeforeMonthYear(month, year),
  );
  const beforeDaysCount = new Date(year, month, 1).getDay() - 1;
  const calcDays = maxDay + beforeDaysCount;
  const afterDaysCount = Math.round(calcDays / 7) * 7 - calcDays;

  return {
    current: Array.from({ length: maxDay }, (_, i) => i + 1),
    previous: Array.from(
      { length: beforeDaysCount },
      (_, i) => beforeMaxDay - beforeDaysCount + i + 1,
    ),
    next: Array.from({ length: afterDaysCount }, (_, i) => i + 1),
  };
};
