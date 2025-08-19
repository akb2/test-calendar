import { UseTitle } from "#app/utils/Theme";
import { Container } from "#components/base/Container/Container";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  UseTitle("О сайте");

  return (
    <Container>
      <Link to="/">Home</Link>
      <div>About</div>
    </Container>
  );
};
