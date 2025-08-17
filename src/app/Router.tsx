import { DefaultLayout } from "#components/layouts/DefaultLayout";
import { AboutPageUrl } from "#data/Routes";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  // Основное содержание
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        lazy: () =>
          import("#pages/HomePage").then(({ HomePage }) => ({
            Component: HomePage,
          })),
      },
      //
      {
        path: AboutPageUrl,
        lazy: () =>
          import("#pages/AboutPage").then(({ AboutPage }) => ({
            Component: AboutPage,
          })),
      },
    ],
  },
]);
