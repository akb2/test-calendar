import type { NavLinkRenderProps } from "react-router-dom";
import { HeaderMenuItemsActiveClass } from "./HeaderMenu.const";

export const HeaderMenuItemsActiveDetect = ({
  isActive,
}: NavLinkRenderProps) => (isActive ? HeaderMenuItemsActiveClass : undefined);
