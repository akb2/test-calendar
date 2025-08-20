import { HeaderMenuItems } from "./HeaderMenu.const";
import { HeaderMenuItem, HeaderMenuRoot } from "./HeaderMenu.styled";
import { HeaderMenuItemsActiveDetect } from "./HeaderMenu.utils";

export const HeaderMenu = () => (
  <HeaderMenuRoot>
    {HeaderMenuItems.map((item) => (
      <HeaderMenuItem
        key={item.to}
        to={item.to}
        end={!!item.end}
        className={HeaderMenuItemsActiveDetect}
      >
        {item.label}
      </HeaderMenuItem>
    ))}
  </HeaderMenuRoot>
);
