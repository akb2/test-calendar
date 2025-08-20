import type { PropsWithChildren } from "react";

export interface ContainerProps extends PropsWithChildren {
  $noPadding?: boolean;
  $noPaddingLeft?: boolean;
}
