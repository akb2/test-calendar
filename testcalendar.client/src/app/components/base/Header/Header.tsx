import { selectLoading } from "../../../store/calendar/selectors";
import { setDate } from "../../../store/calendar/slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { UseThemeColor } from "../../../utils/Theme";
import { CurrentDate } from "../../io/CurrentDate/CurrentDate";
import { Container } from "../Container/Container";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { HeaderMenuItem } from "../HeaderMenuItem/HeaderMenuItem";
import { HeaderBackgroundColor } from "./Header.const";
import { HeaderLayout, HeaderRoot } from "./Header.styled";

export const Header = () => {
  const dispatcher = useAppDispatch();
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const calendarLoading = useAppSelector(selectLoading);

  UseThemeColor(HeaderBackgroundColor);

  return (
    <HeaderRoot>
      <Container $noPadding $noPaddingLeft $noPaddingRight>
        <HeaderLayout>
          <HeaderMenu />
          <HeaderMenuItem
            $disabled={calendarLoading}
            $click={() => dispatcher(setDate({ month, year }))}
          >
            <CurrentDate />
          </HeaderMenuItem>
        </HeaderLayout>
      </Container>
    </HeaderRoot>
  );
};
