import { ContainerRoot } from "./Container.styled";
import type { ContainerProps } from "./Container.types";

export const Container = ({
  children,
  $noPadding,
  $noPaddingLeft,
  $noPaddingRight,
}: ContainerProps) => (
  <ContainerRoot
    $noPadding={$noPadding}
    $noPaddingLeft={$noPaddingLeft}
    $noPaddingRight={$noPaddingRight}
  >
    {children}
  </ContainerRoot>
);
