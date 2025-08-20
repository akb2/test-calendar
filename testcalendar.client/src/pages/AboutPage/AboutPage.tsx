import { Link } from "react-router-dom";
import { UseTitle } from "../../app/utils/Theme";
import { Container } from "../../app/components/base/Container/Container";

export const AboutPage = () => {
  UseTitle("О сайте");

  return (
    <Container>
      <Link to="/">Home</Link>
      <div>About</div>
    </Container>
  );
};
