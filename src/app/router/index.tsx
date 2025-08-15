import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  // Основное содержание
  {
    element: <Outlet />,
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