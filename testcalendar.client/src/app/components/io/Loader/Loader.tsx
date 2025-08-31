import { LoaderRoot } from "./Loader.styled";
import type { LoaderProps } from "./Loader.types";

export const Loader = ({ title, loading }: LoaderProps) =>
  loading && <LoaderRoot>{title}</LoaderRoot>;
