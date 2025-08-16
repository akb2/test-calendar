import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../base/Container/Container";
import { HeaderSection } from "../base/HeaderSection";

export const DefaultLayout = () => (
  <div>
    <HeaderSection />

    <Suspense fallback={<div> Загрузка...</div>}>
      <Outlet />
    </Suspense>

    <footer>
      <Container>Footer</Container>
    </footer>
  </div>
);
