import { Container } from "#components/base/Container/Container";
import { UseThemeColor } from "#utils/Theme";
import { HeaderBackgroundColor } from "./Header.const";
import { HeaderRoot } from "./Header.styled";

export const Header = () => {
  UseThemeColor(HeaderBackgroundColor);

  return (
    <HeaderRoot>
      <Container $noPadding>123</Container>
    </HeaderRoot>
  );
};
