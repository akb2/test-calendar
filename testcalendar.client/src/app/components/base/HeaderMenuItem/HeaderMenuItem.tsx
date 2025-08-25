import {
  HeaderMenuItemLinkRoot,
  HeaderMenuItemRoot,
} from "./HeaderMenuItem.styled";
import type { HeaderMenuItemProps } from "./HeaderMenuItem.types";
import { HeaderMenuItemsActiveDetect } from "./HeaderMenuItem.utils";

export const HeaderMenuItem = ({
  children,
  $menuItem,
  $click,
}: HeaderMenuItemProps) =>
  $menuItem ? (
    <HeaderMenuItemLinkRoot
      to={$menuItem.to}
      end={!!$menuItem.end}
      className={HeaderMenuItemsActiveDetect}
    >
      {$menuItem.label}
    </HeaderMenuItemLinkRoot>
  ) : (
    <HeaderMenuItemRoot onClick={$click}>{children}</HeaderMenuItemRoot>
  );
