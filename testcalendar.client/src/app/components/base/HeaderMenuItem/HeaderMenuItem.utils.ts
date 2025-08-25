import type { NavLinkRenderProps } from "react-router-dom";
import { HeaderMenuItemsActiveClass } from "./HeaderMenuItem.const";

export const HeaderMenuItemsActiveDetect = ({
  isActive,
}: NavLinkRenderProps) => (isActive ? HeaderMenuItemsActiveClass : undefined);
