import { CalendarDaysListRoot } from "./CalendarDaysList.styled";
import { GetMonthDays } from "./CalendarDaysList.utils";

export const CalendarDaysList = () => (
  <CalendarDaysListRoot>
    <pre>{JSON.stringify(GetMonthDays(), null, 2)}</pre>
  </CalendarDaysListRoot>
);
