import { useEffect, useState } from "react";

// один интервал в корне
export const CurrentDateTimer = () => {
  const msSecond = 1000;
  const [date, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), msSecond);

    return () => clearInterval(id);
  });

  return date;
};
