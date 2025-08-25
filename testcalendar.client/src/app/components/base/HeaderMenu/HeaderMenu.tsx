import { HeaderMenuItem } from "../HeaderMenuItem/HeaderMenuItem";
import { HeaderMenuItems } from "./HeaderMenu.const";
import { HeaderMenuRoot } from "./HeaderMenu.styled";

export const HeaderMenu = () => (
  <HeaderMenuRoot>
    {HeaderMenuItems.map((menuItem) => (
      <HeaderMenuItem key={menuItem.to} $menuItem={menuItem} />
    ))}
  </HeaderMenuRoot>
);
