import { CalendarDaysListItemKey } from "./CalendarDaysList.const";
import {
  CalendarDaysListItem,
  CalendarDaysListItemNumber,
  CalendarDaysListRoot,
} from "./CalendarDaysList.styled";
import { GetMonthDays } from "./CalendarDaysList.utils";

export const CalendarDaysList = () => {
  const daysList = GetMonthDays();

  return (
    <CalendarDaysListRoot>
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
    </CalendarDaysListRoot>
  );
};
