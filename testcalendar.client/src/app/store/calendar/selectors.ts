import type { RootState } from "../types";

export const selectYear = ({ calendar: { year } }: RootState) => year;
export const selectMonth = ({ calendar: { month } }: RootState) => month;
export const selectLoading = ({ calendar: { loading } }: RootState) => loading;
