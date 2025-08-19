import { DefaultLayout } from "#components/layouts/DefaultLayout";
import { AboutPageUrl } from "#data/Routes";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  // Основное содержание
  {
    element: <DefaultLayout />,
    children: [
      // Главная страница
      {
        index: true,
        lazy: () =>
          import("#pages/HomePage/HomePage").then(({ HomePage }) => ({
            Component: HomePage,
          })),
      },
      // О сайте
      {
        path: AboutPageUrl,
        lazy: () =>
          import("#pages/AboutPage/AboutPage").then(({ AboutPage }) => ({
            Component: AboutPage,
          })),
      },
    ],
  },
]);
