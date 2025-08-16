import { ContainerRoot } from "./Container.styled";
import { ContainerProps } from "./Container.types";

export const Container = ({ children, noPadding }: ContainerProps) => (
  <ContainerRoot noPadding={noPadding}>{children}</ContainerRoot>
);
