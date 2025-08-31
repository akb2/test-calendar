import { ClassCurrent, ClassDisabled } from "../../../data/ClassNames";
import { Loader } from "../Loader/Loader";
import { CalendarDaysListItemKey, ClassToday } from "./CalendarDaysList.const";
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
  const disabledClass = loading && ClassDisabled;

  return (
    <CalendarDaysListRoot>
      {daysList.map((item, index) => {
        const classes = `${disabledClass} ${item.inMonth && ClassCurrent} ${item.isToday && ClassToday}`;

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
      <Loader $title="Загрузка" $loading={loading} $size={120} />
    </CalendarDaysListRoot>
  );
};
