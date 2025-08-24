import type { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  $title: string;
  $click?: () => void;
}
