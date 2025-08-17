import { useEffect } from "react";

const CreateThemeMeta = (): HTMLMetaElement => {
  const meta = document.createElement("meta");

  meta.name = "theme-color";

  document.head.appendChild(meta);

  return meta;
};

const GetThemeMeta = () => document.querySelector<HTMLMetaElement>("meta[name='theme-color']") ?? CreateThemeMeta();

export const UseThemeColor = (color: string) => useEffect(
  () => {
    const meta = GetThemeMeta();

    meta.content = color;
  },
  [color]
);