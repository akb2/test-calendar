import { Container } from "../../app/components/base/Container/Container";
import { UseTitle } from "../../app/utils/Theme";

export const NotFoundPage = () => {
  UseTitle("Страница не найдена");

  return <Container>Страница не найдена</Container>;
};
