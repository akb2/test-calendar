import { format } from "date-fns";
import { Fragment } from "react";
import { CurrentDateTimer } from "../../../utils/Date";
import {
  CurrentDateRoot,
  CurrentDateSubTitle,
  CurrentDateSubTitleOverlay,
  CurrentDateTitle,
} from "./CurrentDate.styled";

export const CurrentDate = () => {
  const date = CurrentDateTimer(1000);
  const dateAttr = format(date, "yyyy-MM-dd");
  const dateString = format(date, "dd MMMM yyyy");
  const timeString = format(date, "HH:mm:ss");
  const time = timeString.split(":");

  return (
    <CurrentDateRoot>
      <CurrentDateTitle dateTime={dateAttr}>{dateString}</CurrentDateTitle>
      <CurrentDateSubTitleOverlay dateTime={timeString}>
        {time.map((t, k) => (
          <Fragment key={k + "-" + t}>
            {k > 0 && <CurrentDateSubTitle>:</CurrentDateSubTitle>}
            <CurrentDateSubTitle className="digit">{t}</CurrentDateSubTitle>
          </Fragment>
        ))}
      </CurrentDateSubTitleOverlay>
    </CurrentDateRoot>
  );
};
