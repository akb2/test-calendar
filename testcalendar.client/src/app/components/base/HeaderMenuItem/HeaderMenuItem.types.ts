import type { PropsWithChildren } from "react";
import type { HeaderMenuItem } from "../../../models/Theme";

export interface HeaderMenuItemProps extends PropsWithChildren {
  $menuItem?: HeaderMenuItem;
  $disabled?: boolean;
  $click?: () => void;
}
