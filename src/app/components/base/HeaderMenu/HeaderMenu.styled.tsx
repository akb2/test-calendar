import { ContainerPaddingX, HeaderHeight } from "#data/layout";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderMenuRoot = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMenuItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0 ${ContainerPaddingX};
  height: ${HeaderHeight};
  line-height: ${HeaderHeight};
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
