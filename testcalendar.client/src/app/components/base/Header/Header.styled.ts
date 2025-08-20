import { styled } from "styled-components";
import { HeaderBackgroundColor, HeaderTextColor } from "./Header.const";
import { HeaderHeight } from "../../../data/layout";

export const HeaderRoot = styled.header`
  background-color: ${HeaderBackgroundColor};
  color: ${HeaderTextColor};
`;

export const HeaderLayout = styled.div`
  width: 100%;
  height: ${HeaderHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
