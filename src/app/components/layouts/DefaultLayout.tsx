import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HeaderSection } from "../base/HeaderSection";

export const DefaultLayout = () => (
  <div>
    <HeaderSection />

    <Suspense fallback={<div> Загрузка...</div>}>
      <Outlet />
    </Suspense>

    <footer> Footer </footer>
  </div>
);