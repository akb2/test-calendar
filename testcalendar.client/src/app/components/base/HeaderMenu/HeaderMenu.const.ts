import { AboutPageUrl, HomePageUrl } from "../../../data/Routes";
import type { HeaderMenuItem } from "./HeaderMenu.types";

export const HeaderMenuItemsBorderY = "3px";
export const HeaderMenuItemsBackgound = "rgba(0, 0, 0, 0.1)";
export const HeaderMenuItemsBorderColor = "white";
export const HeaderMenuItemsAnimationSpeed = "0.2s";
export const HeaderMenuItemsAnimationProperties = [
  "border-color",
  "background-color",
];
export const HeaderMenuItemsActiveClass = "active";

export const HeaderMenuItems: HeaderMenuItem[] = [
  // Главное меню
  {
    label: "Главная",
    to: HomePageUrl,
    end: true,
  },
  // О сайте
  {
    label: "О сайте",
    to: AboutPageUrl,
  },
];
