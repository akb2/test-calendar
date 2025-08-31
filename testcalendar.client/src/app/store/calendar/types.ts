import type {
  nextMonth,
  prevMonth,
  setDate,
  startLoader,
  stopLoader,
} from "./slice";

export type CalendarState = {
  year: number;
  month: number;
  loading: boolean;
};

export type CalendarAction =
  | ReturnType<typeof setDate>
  | ReturnType<typeof startLoader>
  | ReturnType<typeof stopLoader>
  | ReturnType<typeof nextMonth>
  | ReturnType<typeof prevMonth>;
