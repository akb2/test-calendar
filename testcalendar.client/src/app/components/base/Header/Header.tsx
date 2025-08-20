import { UseThemeColor } from "../../../utils/Theme";
import { CurrentDate } from "../../io/CurrentDate/CurrentDate";
import { Container } from "../Container/Container";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
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
