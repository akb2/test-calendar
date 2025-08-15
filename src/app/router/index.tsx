import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

export const router = createBrowserRouter([
  // Основное содержание
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        lazy: () => import("../../pages/home").then(({ HomePage }) => ({ Component: HomePage }))
      },
      //
      {
        path: "/about",
        lazy: () => import("../../pages/about").then(({ AboutPage }) => ({ Component: AboutPage }))
      },
    ]
  }
]);