import { UseThemeColor } from "../../../utils/Theme";
import { CurrentDate } from "../../io/CurrentDate/CurrentDate";
import { Container } from "../Container/Container";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { HeaderMenuItem } from "../HeaderMenuItem/HeaderMenuItem";
import { HeaderBackgroundColor } from "./Header.const";
import { HeaderLayout, HeaderRoot } from "./Header.styled";

export const Header = () => {
  UseThemeColor(HeaderBackgroundColor);

  return (
    <HeaderRoot>
      <Container $noPadding $noPaddingLeft $noPaddingRight>
        <HeaderLayout>
          <HeaderMenu />
          <HeaderMenuItem>
            <CurrentDate />
          </HeaderMenuItem>
        </HeaderLayout>
      </Container>
    </HeaderRoot>
  );
};
