import type { PropsWithChildren } from "react";

export interface LoaderProps extends PropsWithChildren {
  $title: string;
  $loading: boolean;
  $size?: number;
}

export interface LoaderAnimationProps {
  $size: number;
  $borderSize: number;
}

export interface LoaderTitleProps {
  $size: number;
}
