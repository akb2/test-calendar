import { Get } from "../utils/Http";

export const GetSelectedDate = () => Get("/api/calendar/selected-date");
