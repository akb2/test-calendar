import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { AboutPageUrl, NotFoundPageUrl } from "./data/Routes";

export const Router = createBrowserRouter([
  // Основное содержание
  {
    element: <DefaultLayout />,
    children: [
      // Главная страница
      {
        index: true,
        lazy: () =>
          import("../pages/HomePage/HomePage").then(({ HomePage }) => ({
            Component: HomePage,
          })),
      },
      // О сайте
      {
        path: AboutPageUrl,
        lazy: () =>
          import("../pages/AboutPage/AboutPage").then(({ AboutPage }) => ({
            Component: AboutPage,
          })),
      },
      // Страница 404
      {
        path: NotFoundPageUrl,
        lazy: () =>
          import("../pages/NotFoundPage/NotFoundPage").then(
            ({ NotFoundPage }) => ({
              Component: NotFoundPage,
            }),
          ),
      },
    ],
  },
]);
