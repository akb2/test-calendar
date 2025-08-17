import { ContainerRoot } from "./Container.styled";
import { ContainerProps } from "./Container.types";

export const Container = ({
  children,
  $noPadding,
  $noPaddingLeft,
}: ContainerProps) => (
  <ContainerRoot $noPadding={$noPadding} $noPaddingLeft={$noPaddingLeft}>
    {children}
  </ContainerRoot>
);
