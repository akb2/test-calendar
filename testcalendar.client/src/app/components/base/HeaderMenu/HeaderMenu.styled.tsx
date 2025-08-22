import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ContainerPaddingX, HeaderHeight } from "../../../data/Theme";
import {
  HeaderMenuItemsActiveClass,
  HeaderMenuItemsAnimationProperties,
  HeaderMenuItemsAnimationSpeed,
  HeaderMenuItemsBackgound,
  HeaderMenuItemsBorderColor,
  HeaderMenuItemsBorderY,
} from "./HeaderMenu.const";

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
  border-width: ${HeaderMenuItemsBorderY} 0;
  border-style: solid;
  border-color: transparent;
  transition: ${HeaderMenuItemsAnimationProperties.map(
    (prop) => prop + " " + HeaderMenuItemsAnimationSpeed,
  ).join(", ")};

  &:hover {
    background-color: ${HeaderMenuItemsBackgound};
  }

  &.${HeaderMenuItemsActiveClass} {
    border-bottom-color: ${HeaderMenuItemsBorderColor};
  }
`;
