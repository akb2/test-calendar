import { combineEpics } from "redux-observable";
import { calendarEpic } from "./calendar/effects";

export const rootEpic = combineEpics(calendarEpic);
