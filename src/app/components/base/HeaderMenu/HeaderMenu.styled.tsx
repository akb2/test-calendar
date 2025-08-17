import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderMenuRoot = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMenuItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0 15px;
  height: 80px;
  line-height: 80px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
