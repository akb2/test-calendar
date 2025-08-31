import type { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  $disabled?: boolean;
  $title: string;
  $click?: () => void;
}
