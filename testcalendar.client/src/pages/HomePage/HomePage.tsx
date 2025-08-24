import { Container } from "../../app/components/base/Container/Container";
import { Button } from "../../app/components/io/Button/Button";
import { CalendarDaysList } from "../../app/components/io/CalendarDaysList/CalendarDaysList";
import { MonthLabels } from "../../app/data/App";
import { selectMonth, selectYear } from "../../app/store/calendar/selectors";
import { nextMonth, prevMonth } from "../../app/store/calendar/slice";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
  AfterMonth,
  AfterMonthYear,
  BeforeMonth,
  BeforeMonthYear,
} from "../../app/utils/Date";
import { UseTitle } from "../../app/utils/Theme";
import {
  Actions,
  CalendarLabel,
  CalendarLabelLayout,
  CalendarSubLabel,
} from "./HomePage.styled";

export const HomePage = () => {
  const dispatcher = useAppDispatch();
  const month = useAppSelector(selectMonth);
  const year = useAppSelector(selectYear);
  const beforeMonth = BeforeMonth(month);
  const beforeYear = BeforeMonthYear(month, year);
  const afterMonth = AfterMonth(month);
  const afterYear = AfterMonthYear(month, year);

  UseTitle();

  return (
    <Container>
      <Actions>
        <Button
          $title={`${MonthLabels[beforeMonth]} ${beforeYear}`}
          $click={() => dispatcher(prevMonth())}
        />
        <CalendarLabelLayout>
          <CalendarSubLabel>{MonthLabels[month]}</CalendarSubLabel>
          <CalendarLabel>{year}</CalendarLabel>
        </CalendarLabelLayout>
        <Button
          $title={`${MonthLabels[afterMonth]} ${afterYear}`}
          $click={() => dispatcher(nextMonth())}
        />
      </Actions>
      <CalendarDaysList $month={month} $year={year} />
    </Container>
  );
};
