import { describe, expect, test } from "@jest/globals";
import type { Direction, Nullable } from "../../../models/App";
import {
  AfterMonth,
  AfterMonthYear,
  BeforeMonth,
  BeforeMonthYear,
} from "../../../utils/Date";
import { MonthDaysListItem } from "./CalendarDaysList.types";
import { GetMonthDays } from "./CalendarDaysList.utils";

const now = new Date();

const TodayData = (
  month: number,
  year: number,
): [number, Nullable<Direction>] => {
  const todayMonth = now.getMonth();
  const todayYear = now.getFullYear();
  const todayDay = now.getDate();
  let direction: Nullable<Direction> = null;
  // Текущий месяц
  if (month === todayMonth && year === todayYear) {
    direction = 0;
  }
  // Предыдущий месяц
  else if (
    month === BeforeMonth(todayMonth) &&
    year === BeforeMonthYear(todayMonth, todayYear)
  ) {
    direction = -1;
  }
  // Следующий месяц
  else if (
    month === AfterMonth(todayMonth) &&
    year === AfterMonthYear(todayMonth, todayYear)
  ) {
    direction = 1;
  }

  return [todayDay, direction];
};

const CreateMock = (
  maxDay: number,
  beforeMaxDay: number,
  beforeCount: number,
  afterCount: number,
  todayNumber: Nullable<number>,
  todaySection: Nullable<Direction>,
): MonthDaysListItem[] =>
  Array.from({ length: maxDay + beforeCount + afterCount }, (_, i) => {
    const position = i - beforeCount + 1;
    const inMonth = position > 0 && position <= maxDay;

    let day = position;
    let isToday = inMonth && todaySection === 0 && todayNumber === position;
    // Хвосты
    if (!inMonth) {
      // Слева
      if (position <= 0) {
        day = beforeMaxDay + position;
        isToday = (todaySection === -1 && todayNumber === day) || isToday;
      }
      // Справа
      else {
        day = position - maxDay;
        isToday = (todaySection === 1 && todayNumber === day) || isToday;
      }
    }

    return { day, inMonth, isToday };
  });

describe("CalendarDaysList", () => {
  test("Август 2025", () =>
    expect(GetMonthDays(7, 2025)).toEqual(
      CreateMock(31, 31, 4, 0, ...TodayData(7, 2025)),
    ));
});
