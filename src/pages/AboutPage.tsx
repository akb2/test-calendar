import { Link } from "react-router-dom";
import { Container } from "../app/components/base/Container";

export const AboutPage = () => (
  <Container>
    <Link to="/">Home</Link>
    <div>About</div>
  </Container>
);
