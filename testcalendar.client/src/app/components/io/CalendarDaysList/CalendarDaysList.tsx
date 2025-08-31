import { Loader } from "../Loader/Loader";
import { CalendarDaysListItemKey } from "./CalendarDaysList.const";
import {
  CalendarDaysListItem,
  CalendarDaysListItemNumber,
  CalendarDaysListRoot,
} from "./CalendarDaysList.styled";
import type { CalendarDaysListProps } from "./CalendarDaysList.types";
import { GetMonthDays } from "./CalendarDaysList.utils";

export const CalendarDaysList = ({
  $month,
  $year,
  $loading,
}: CalendarDaysListProps) => {
  const daysList = GetMonthDays($month, $year);
  const loading = !!$loading;
  const disabledClass = loading ? "disabled" : "";

  return (
    <CalendarDaysListRoot className={disabledClass}>
      {daysList.map((item, index) => {
        const classes = `${item.inMonth && "current"} ${item.isToday && "today"}`;

        return (
          <CalendarDaysListItem
            key={CalendarDaysListItemKey(item, index)}
            className={classes}
          >
            <CalendarDaysListItemNumber className={classes}>
              {item.day}
            </CalendarDaysListItemNumber>
          </CalendarDaysListItem>
        );
      })}
      <Loader title="Загрузка" loading={loading} />
    </CalendarDaysListRoot>
  );
};
