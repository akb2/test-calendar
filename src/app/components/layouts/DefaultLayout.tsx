import { Container } from "#components/base/Container/Container";
import { HeaderSection } from "#components/base/HeaderSection";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

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
