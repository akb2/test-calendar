import { Link } from "react-router-dom";
import { Container } from "../app/сomponents/base/Container/Container";

export const HomePage = () => (
  <Container>
    <div>Home</div>
    <Link to="/about">About</Link>
  </Container>
);
