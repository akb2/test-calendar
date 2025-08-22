import type { PropsWithChildren } from "react";

export type MonthDaysListItem = {
  day: number;
  inMonth: boolean;
};

export interface CalendarDaysListItemProps extends PropsWithChildren {
  $inMonth: boolean;
}
