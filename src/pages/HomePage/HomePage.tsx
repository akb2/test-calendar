import { UseTitle } from "#app/utils/Theme";
import { Container } from "#components/base/Container/Container";
import { Link } from "react-router-dom";

export const HomePage = () => {
  UseTitle();

  return (
    <Container>
      <div>Home</div>
      <Link to="/about">About</Link>
    </Container>
  );
};
