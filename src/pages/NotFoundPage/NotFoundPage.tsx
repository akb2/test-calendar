import { UseTitle } from "#app/utils/Theme";
import { Container } from "#components/base/Container/Container";

export const NotFoundPage = () => {
  UseTitle("Страница не найдена");

  return <Container>Страница не найдена</Container>;
};
