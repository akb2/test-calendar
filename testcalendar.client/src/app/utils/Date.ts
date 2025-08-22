import { useEffect, useState } from "react";

export const BeforeMonth = (month: number) => (month > 0 ? month - 1 : 11);

export const AfterMonth = (month: number) => (month < 11 ? month + 1 : 0);

export const BeforeMonthYear = (month: number, year: number) =>
  BeforeMonth(month) > 0 ? year : year - 1;

export const AfterMonthYear = (month: number, year: number) =>
  AfterMonth(month) < 11 ? year : year + 1;

export const CurrentDateTimer = (updateInterval = 1000) => {
  const [date, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), updateInterval);

    return () => clearInterval(id);
  });

  return date;
};
