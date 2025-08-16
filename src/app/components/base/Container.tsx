import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => (
  <div className="container">{children}</div>
);