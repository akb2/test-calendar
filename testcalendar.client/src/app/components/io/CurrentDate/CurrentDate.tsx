import { format } from "date-fns";
import { CurrentDateTimer } from "../../../utils/Date";
import {
  CurrentDateRoot,
  CurrentDateSubTitle,
  CurrentDateTitle,
} from "./CurrentDate.styled";

export const CurrentDate = () => {
  const date = CurrentDateTimer(1000);
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
