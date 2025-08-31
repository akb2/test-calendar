import { createSlice } from "@reduxjs/toolkit";
import type { ActionData } from "../types";
import type { CalendarState } from "./types";

const now = new Date();

const initialState: CalendarState = {
  year: now.getFullYear(),
  month: now.getMonth(),
  loading: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (
      state,
      {
        payload: { month, year, loading },
      }: ActionData<CalendarState, "month" | "year">,
    ) => {
      state.loading = loading ?? state.loading;
      state.month = month;
      state.year = year;
    },
    startLoader: (state) => {
      state.loading = true;
    },
    stopLoader: (state) => {
      state.loading = false;
    },
    nextMonth: () => {},
    prevMonth: () => {},
  },
});

export const {
  reducer: calendarReducer,
  // Exporting actions for use in components or effects
  actions: { setDate, startLoader, stopLoader, nextMonth, prevMonth },
} = calendarSlice;
