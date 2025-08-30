import type { SelectedDate } from "../models/Date";
import { Get } from "../utils/Http";

export const GetSelectedDate = () =>
  Get<SelectedDate>("/api/calendar/selected-date");
