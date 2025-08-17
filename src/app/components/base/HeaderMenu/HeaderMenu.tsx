import { HeaderMenuItems } from "./HeaderMenu.const";
import { HeaderMenuItem, HeaderMenuRoot } from "./HeaderMenu.styled";

export const HeaderMenu = () => (
  <HeaderMenuRoot>
    {HeaderMenuItems.map((item) => (
      <HeaderMenuItem
        key={item.to}
        to={item.to}
        end={!!item.end}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {item.label}
      </HeaderMenuItem>
    ))}
  </HeaderMenuRoot>
);
