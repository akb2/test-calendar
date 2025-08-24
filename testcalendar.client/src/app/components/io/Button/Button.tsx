import { ButtonRoot } from "./Button.styled";
import type { ButtonProps } from "./Button.types";

export const Button = ({ $title, $click }: ButtonProps) => {
  const action = () => {
    if ($click) {
      $click();
    }
  };

  return <ButtonRoot onClick={action}>{$title}</ButtonRoot>;
};
