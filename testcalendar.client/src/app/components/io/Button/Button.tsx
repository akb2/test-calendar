import { ButtonRoot } from "./Button.styled";
import type { ButtonProps } from "./Button.types";

export const Button = ({ title }: ButtonProps) => (
  <ButtonRoot>{title}</ButtonRoot>
);
