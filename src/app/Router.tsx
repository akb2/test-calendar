import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";

export const Router = createBrowserRouter([
  // Основное содержание
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        lazy: () => import("../pages/HomePage").then(({ HomePage }) => ({ Component: HomePage }))
      },
      //
      {
        path: "/about",
        lazy: () => import("../pages/AboutPage").then(({ AboutPage }) => ({ Component: AboutPage }))
      },
    ]
  }
]);