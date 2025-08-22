import type { RootState } from "../types";

export const selectYear = (s: RootState) => s.calendar.year;
export const selectMonth = (s: RootState) => s.calendar.month;
