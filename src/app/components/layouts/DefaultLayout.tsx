import { Container } from "#components/base/Container/Container";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../base/Header/Header";

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
