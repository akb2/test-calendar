import { Container } from "../../app/components/base/Container/Container";
import { Button } from "../../app/components/io/Button/Button";
import { CalendarDaysList } from "../../app/components/io/CalendarDaysList/CalendarDaysList";
import { UseTitle } from "../../app/utils/Theme";
import { Actions, CalendarLabel } from "./HomePage.styled";

export const HomePage = () => {
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
      <CalendarDaysList />
    </Container>
  );
};
