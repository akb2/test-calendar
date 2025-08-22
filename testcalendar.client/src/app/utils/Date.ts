import { useEffect, useState } from "react";

export const CurrentDateTimer = (updateInterval = 1000) => {
  const [date, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), updateInterval);

    return () => clearInterval(id);
  });

  return date;
};
