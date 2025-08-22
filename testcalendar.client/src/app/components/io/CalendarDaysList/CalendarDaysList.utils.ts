import { CurrentDateTimer } from "../../../utils/Date";
import { UpdateInterval } from "./CalendarDaysList.const";
import type { MonthDaysListItem } from "./CalendarDaysList.types";

const DaysInMonth = (month: number, year: number) =>
  new Date(year, month + 1, 0).getDate();

const BeforeMonth = (month: number) => (month > 0 ? month - 1 : 11);

const AfterMonth = (month: number) => (month < 11 ? month + 1 : 0);

const BeforeMonthYear = (month: number, year: number) =>
  BeforeMonth(month) > 0 ? year : year - 1;

const AfterMonthYear = (month: number, year: number) =>
  AfterMonth(month) < 11 ? year : year + 1;

const IsCurrentDay = (date: Date, day: number, month: number, year: number) => {
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  return day === currentDay && month === currentMonth && year === currentYear;
};

export const GetMonthDays = (
  mixedMonth?: number,
  mixedYear?: number,
): MonthDaysListItem[] => {
  const date = CurrentDateTimer(UpdateInterval);

  const neededMonth = mixedMonth ?? date.getMonth();
  const neededYear = mixedYear ?? date.getFullYear();

  const beforeMonth = BeforeMonth(neededMonth);
  const afterMonth = AfterMonth(neededMonth);
  const beforeMonthYear = BeforeMonthYear(neededMonth, neededYear);
  const afterMonthYear = AfterMonthYear(neededMonth, neededYear);

  const beforeMaxDay = DaysInMonth(beforeMonth, beforeMonthYear);

  const maxDay = DaysInMonth(neededMonth, neededYear);
  const beforeDaysCount = new Date(neededYear, neededMonth, 1).getDay() - 1;
  const calcDays = maxDay + beforeDaysCount;
  const afterDaysCount = Math.round(calcDays / 7) * 7 - calcDays;
  const allDays = beforeDaysCount + maxDay + afterDaysCount;

  return Array.from({ length: allDays }, (_, i) => {
    const position = i - beforeDaysCount + 1;
    const inMonth = position > 0 && position <= maxDay;
    let day = position;
    let month = neededMonth;
    let year = neededYear;

    if (!inMonth) {
      if (position <= 0) {
        day = beforeMaxDay + position;
        month = beforeMonth;
        year = beforeMonthYear;
      } else {
        day = position - maxDay;
        month = afterMonth;
        year = afterMonthYear;
      }
    }

    return {
      isCurrent: IsCurrentDay(date, day, month, year),
      day,
      inMonth,
    };
  });
};
