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
      {daysList.map((item, index) => (
        <CalendarDaysListItem
          key={CalendarDaysListItemKey(item, index)}
          $inMonth={item.inMonth}
          $isCurrent={!!item.isCurrent}
        >
          <CalendarDaysListItemNumber
            $inMonth={item.inMonth}
            $isCurrent={!!item.isCurrent}
          >
            {item.day}
          </CalendarDaysListItemNumber>
        </CalendarDaysListItem>
      ))}
    </CalendarDaysListRoot>
  );
};
