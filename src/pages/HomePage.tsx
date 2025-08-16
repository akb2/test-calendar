import { Link } from "react-router-dom";
import { Container } from "../app/components/base/Container";

export const HomePage = () => (
  <Container>
    <div>Home</div>
    <Link to="/about">About</Link>
  </Container>
);
