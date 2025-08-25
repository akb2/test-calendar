import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  AnimationSpeed,
  ContainerPaddingX,
  HeaderHeight,
} from "../../../data/Theme";
import {
  HeaderMenuItemsActiveClass,
  HeaderMenuItemsBackgound,
  HeaderMenuItemsBorderColor,
  HeaderMenuItemsBorderY,
} from "./HeaderMenuItem.const";

const HeaderMenuItemStyles = css`
  color: white;
  text-decoration: none;
  padding: 0 ${ContainerPaddingX};
  height: ${HeaderHeight};
  line-height: ${HeaderHeight};
  border-width: ${HeaderMenuItemsBorderY} 0;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  transition-property: border-color, background-color;
  transition-duration: ${AnimationSpeed};

  &:hover {
    background-color: ${HeaderMenuItemsBackgound};
  }

  &.${HeaderMenuItemsActiveClass} {
    border-bottom-color: ${HeaderMenuItemsBorderColor};
  }
`;

export const HeaderMenuItemLinkRoot = styled(NavLink)`
  ${HeaderMenuItemStyles}
`;

export const HeaderMenuItemRoot = styled.span`
  ${HeaderMenuItemStyles}

  display: inline-flex;
  align-items: center;
`;
