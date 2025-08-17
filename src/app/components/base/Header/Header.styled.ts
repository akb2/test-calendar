import { styled } from "styled-components";
import { HeaderColor } from "./Header.const";

export const HeaderRoot = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${HeaderColor};
  color: white;
`;