import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CalendarState } from "./types";

const now = new Date();
const initialState: CalendarState = {
  year: now.getFullYear(),
  month: now.getMonth(),
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (
      state,
      action: PayloadAction<Pick<CalendarState, "month" | "year">>,
    ) => {
      state.month = action.payload.month;
      state.year = action.payload.year;
    },
    nextMonth: (state) => state,
    prevMonth: (state) => state,
  },
});

export const {
  reducer: calendarReducer,
  // Exporting actions for use in components or effects
  actions: { setDate, nextMonth, prevMonth },
} = calendarSlice;
