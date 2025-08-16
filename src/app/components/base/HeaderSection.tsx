import styled from "styled-components";
import { Container } from "./Container";

const Root = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkolivegreen;
  color: white;
`;

export const HeaderSection = () => (
  <Root>
    <Container noPadding>123</Container>
  </Root>
);
