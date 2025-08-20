import { useEffect } from "react";
import { SiteName, TitleDelimiter } from "../data/App";

const AddElement = <E extends Node = Node>(
  elm: E,
  parent: Node = document.head,
) => {
  parent.appendChild(elm);

  return elm;
};

const CreateThemeMeta = (): HTMLMetaElement => {
  const meta = document.createElement("meta");

  meta.name = "theme-color";

  return AddElement(meta);
};

const CreateTitleTag = () => AddElement(document.createElement("title"));

const GetThemeMeta = () =>
  document.querySelector<HTMLMetaElement>("meta[name='theme-color']") ??
  CreateThemeMeta();

const TitleTag = () =>
  document.head.getElementsByTagName("title")[0] ?? CreateTitleTag();

export const UseThemeColor = (color: string) =>
  useEffect(() => {
    const meta = GetThemeMeta();

    meta.content = color;
  }, [color]);

export const UseTitle = (title?: string) =>
  useEffect(() => {
    const tag = TitleTag();
    const titles = [title, SiteName].filter(Boolean);

    tag.textContent = titles.join(TitleDelimiter);
  }, [title]);
