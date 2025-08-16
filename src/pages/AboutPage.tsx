import { Container } from "#components/base/Container/Container";
import { Link } from "react-router-dom";

export const AboutPage = () => (
  <Container>
    <Link to="/">Home</Link>
    <div>About</div>
  </Container>
);
