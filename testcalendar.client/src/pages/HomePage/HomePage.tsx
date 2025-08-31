import { Container } from "../../app/components/base/Container/Container";
import { Button } from "../../app/components/io/Button/Button";
import { CalendarDaysList } from "../../app/components/io/CalendarDaysList/CalendarDaysList";
import { MonthLabels } from "../../app/data/App";
import {
  selectLoading,
  selectMonth,
  selectYear,
} from "../../app/store/calendar/selectors";
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
  const loading = useAppSelector(selectLoading);

  UseTitle();

  return (
    <Container>
      <Actions>
        <Button
          $title={`${MonthLabels[beforeMonth]} ${beforeYear}`}
          $disabled={loading}
          $click={() => dispatcher(prevMonth())}
        />
        <CalendarLabelLayout>
          <CalendarSubLabel>{MonthLabels[month]}</CalendarSubLabel>
          <CalendarLabel>{year}</CalendarLabel>
        </CalendarLabelLayout>
        <Button
          $title={`${MonthLabels[afterMonth]} ${afterYear}`}
          $disabled={loading}
          $click={() => dispatcher(nextMonth())}
        />
      </Actions>
      <CalendarDaysList $month={month} $year={year} $loading={loading} />
    </Container>
  );
};
