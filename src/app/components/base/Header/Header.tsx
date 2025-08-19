import { Container } from "#components/base/Container/Container";
import { HeaderMenu } from "#components/base/HeaderMenu/HeaderMenu";
import { UseThemeColor } from "#utils/Theme";
import { CurrentDate } from "../../io/CurrentDate/CurrentDate";
import { HeaderBackgroundColor } from "./Header.const";
import { HeaderLayout, HeaderRoot } from "./Header.styled";

export const Header = () => {
  UseThemeColor(HeaderBackgroundColor);

  return (
    <HeaderRoot>
      <Container $noPadding $noPaddingLeft>
        <HeaderLayout>
          <HeaderMenu />
          <CurrentDate />
        </HeaderLayout>
      </Container>
    </HeaderRoot>
  );
};
