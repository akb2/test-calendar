import {
  CalendarDaysListItem,
  CalendarDaysListRoot,
} from "./CalendarDaysList.styled";
import { GetMonthDays } from "./CalendarDaysList.utils";

export const CalendarDaysList = () => {
  const daysList = GetMonthDays();

  return (
    <CalendarDaysListRoot>
      {daysList.map(({ day, inMonth }) => (
        <CalendarDaysListItem key={day} $inMonth={inMonth} />
      ))}
    </CalendarDaysListRoot>
  );
};
