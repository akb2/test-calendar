import { AboutPageUrl, HomePageUrl } from "#data/Routes";
import { HeaderMenuItem } from "./HeaderMenu.types";

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
