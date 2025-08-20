import { Link } from "react-router-dom";
import { Container } from "../../app/components/base/Container/Container";
import { UseTitle } from "../../app/utils/Theme";

export const HomePage = () => {
  UseTitle();

  return (
    <Container>
      <div>Home</div>
      <Link to="/about">About</Link>
    </Container>
  );
};
