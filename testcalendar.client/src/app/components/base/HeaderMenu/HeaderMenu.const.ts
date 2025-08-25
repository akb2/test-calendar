import { AboutPageUrl, HomePageUrl } from "../../../data/Routes";
import type { HeaderMenuItem } from "../../../models/Theme";

export const HeaderMenuItems: HeaderMenuItem[] = [
  // Главное меню
  {
    label: "Календарь",
    to: HomePageUrl,
    end: true,
  },
  // О сайте
  {
    label: "О сайте",
    to: AboutPageUrl,
  },
];
