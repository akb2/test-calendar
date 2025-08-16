import { Container } from "#components/base/Container/Container";
import styled from "styled-components";

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
