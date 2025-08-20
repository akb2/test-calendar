import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../base/Header/Header";
import { Container } from "../base/Container/Container";

export const DefaultLayout = () => (
  <div>
    <Header />

    <Suspense fallback={<div> Загрузка...</div>}>
      <Outlet />
    </Suspense>

    <footer>
      <Container>Footer</Container>
    </footer>
  </div>
);
