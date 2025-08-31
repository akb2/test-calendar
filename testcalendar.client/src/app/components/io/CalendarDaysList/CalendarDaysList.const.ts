import { DisabledColor } from "../../../data/Theme";
import type { MonthDaysListItem } from "./CalendarDaysList.types";

const MsInSec = 1000;
const SecondsInMin = 60;
const UpdateIntervalByMin = 5;

export const UpdateInterval = MsInSec * SecondsInMin * UpdateIntervalByMin;

export const DefaultColor = DisabledColor;

export const CalendarDaysListItemKey = (
  item: MonthDaysListItem,
  index: number,
) => [index, item.day].join("-");

export const ClassToday = "today";
