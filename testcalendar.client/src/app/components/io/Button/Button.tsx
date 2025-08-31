import { ClassDisabled } from "../../../data/ClassNames";
import { ButtonRoot } from "./Button.styled";
import type { ButtonProps } from "./Button.types";

export const Button = ({ $title, $click, $disabled }: ButtonProps) => {
  const className = `${!!$disabled && ClassDisabled}`;
  const action = () => {
    if (!!$click && !$disabled) {
      $click();
    }
  };

  return (
    <ButtonRoot onClick={action} className={className}>
      {$title}
    </ButtonRoot>
  );
};
