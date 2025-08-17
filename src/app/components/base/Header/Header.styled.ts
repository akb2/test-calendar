import { styled } from "styled-components";
import { HeaderBackgroundColor, HeaderTextColor } from "./Header.const";

export const HeaderRoot = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${HeaderBackgroundColor};
  color: ${HeaderTextColor};
`;