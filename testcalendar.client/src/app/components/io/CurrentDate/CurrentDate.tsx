import { format } from "date-fns";
import {
  CurrentDateRoot,
  CurrentDateSubTitle,
  CurrentDateTitle,
} from "./CurrentDate.styled";
import { CurrentDateTimer } from "./CurrentDate.utils";

export const CurrentDate = () => {
  const date = CurrentDateTimer();
  const dateAttr = format(date, "dd.MM.yyyy");
  const dateString = format(date, "dd MMMM yyyy");
  const timeString = format(date, "HH:mm:ss");

  return (
    <CurrentDateRoot>
      <CurrentDateTitle dateTime={dateAttr}>{dateString}</CurrentDateTitle>
      <CurrentDateSubTitle dateTime={timeString}>
        {timeString}
      </CurrentDateSubTitle>
    </CurrentDateRoot>
  );
};
