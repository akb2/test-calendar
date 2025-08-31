import type { PropsWithChildren } from "react";

export interface LoaderProps extends PropsWithChildren {
  title: string;
  loading: boolean;
}
