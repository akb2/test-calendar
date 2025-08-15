import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => (
  <div>
    <header>Header </header>
    <Suspense fallback={<div> Загрузка...</div>}>
      <Outlet />
    </Suspense>
    <footer> Footer </footer>
  </div>
);