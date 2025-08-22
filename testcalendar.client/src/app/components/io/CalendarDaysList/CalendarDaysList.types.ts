import type { PropsWithChildren } from "react";

export type MonthDaysListItem = {
  day: number;
  inMonth: boolean;
  isCurrent?: boolean;
};

export interface CalendarDaysListItemProps extends PropsWithChildren {
  $inMonth: boolean;
  $isCurrent: boolean;
}
