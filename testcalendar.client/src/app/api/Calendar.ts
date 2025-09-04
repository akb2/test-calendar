import type { SelectedDate } from "../models/Date";
import type { CalendarState } from "../store/calendar/types";
import { Get, Put } from "../utils/Http";

export const GetSelectedDate = () =>
  Get<SelectedDate>("/api/calendar/selected-date");

export const SetSelectedDate = (body: Pick<CalendarState, "month" | "year">) =>
  Put("/api/calendar/selected-date", body);
