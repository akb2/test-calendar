import { Container } from "#components/base/Container/Container";
import { UseThemeColor } from "#utils/Theme";
import { HeaderColor } from "./Header.const";
import { HeaderRoot } from "./Header.styled";

export const Header = () => {
  UseThemeColor(HeaderColor);

  return (
    <HeaderRoot>
      <Container $noPadding>123</Container>
    </HeaderRoot>
  );
};
