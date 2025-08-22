import { CurrentDateTimer } from "../../../utils/Date";
import { UpdateInterval } from "./CalendarDaysList.const";
import type { MonthDaysListItem } from "./CalendarDaysList.types";

const DaysInMonth = (month: number, year: number) =>
  new Date(year, month + 1, 0).getDate();
const BeforeMonth = (month: number) => (month > 0 ? month - 1 : 11);
const NextMonth = (month: number) => (month < 11 ? month + 1 : 0);
const BeforeMonthYear = (month: number, year: number) =>
  month > 0 ? year : year - 1;

export const GetMonthDays = (
  mixedMonth?: number,
  mixedYear?: number,
): MonthDaysListItem[] => {
  const date = CurrentDateTimer(UpdateInterval);
  const month = mixedMonth ?? date.getMonth();
  const year = mixedYear ?? date.getFullYear();
  const maxDay = DaysInMonth(month, year);
  const beforeMaxDay = DaysInMonth(
    BeforeMonth(month),
    BeforeMonthYear(month, year),
  );
  const beforeDaysCount = new Date(year, month, 1).getDay() - 1;
  const calcDays = maxDay + beforeDaysCount;
  const afterDaysCount = Math.round(calcDays / 7) * 7 - calcDays;
  const allDays = beforeDaysCount + maxDay + afterDaysCount;

  return Array.from({ length: allDays }, (_, i) => {
    const position = i - beforeDaysCount + 1;
    const inMonth = position > 0 && position <= maxDay;
    const day = inMonth
      ? position
      : position <= 0
        ? beforeMaxDay + position
        : position - maxDay;

    return { day, inMonth };
  });
};
