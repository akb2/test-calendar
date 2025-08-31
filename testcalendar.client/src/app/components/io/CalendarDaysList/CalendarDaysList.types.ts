import type { PropsWithChildren } from "react";

export interface CalendarDaysListProps extends PropsWithChildren {
  $year: number;
  $month: number;
  $loading?: boolean;
}

export type MonthDaysListItem = {
  day: number;
  inMonth: boolean;
  isToday: boolean;
};
