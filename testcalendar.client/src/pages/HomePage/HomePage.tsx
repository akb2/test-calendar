import { Container } from "../../app/components/base/Container/Container";
import { Button } from "../../app/components/io/Button/Button";
import { CalendarDaysList } from "../../app/components/io/CalendarDaysList/CalendarDaysList";
import { selectMonth, selectYear } from "../../app/store/calendar/selectors";
import { useAppSelector } from "../../app/store/hooks";
import { UseTitle } from "../../app/utils/Theme";
import { Actions, CalendarLabel } from "./HomePage.styled";

export const HomePage = () => {
  const month = useAppSelector(selectMonth);
  const year = useAppSelector(selectYear);

  UseTitle();

  return (
    <Container>
      <Actions>
        <Button title="< Назад" />
        <div>
          <CalendarLabel>{}</CalendarLabel>
        </div>
        <Button title="Вперед >" />
      </Actions>
      <CalendarDaysList $month={month} $year={year} />
    </Container>
  );
};
