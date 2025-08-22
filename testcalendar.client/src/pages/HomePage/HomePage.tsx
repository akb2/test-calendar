import { Container } from "../../app/components/base/Container/Container";
import { CalendarDaysList } from "../../app/components/io/CalendarDaysList/CalendarDaysList";
import { UseTitle } from "../../app/utils/Theme";

export const HomePage = () => {
  UseTitle();

  return (
    <Container>
      <CalendarDaysList />
    </Container>
  );
};
