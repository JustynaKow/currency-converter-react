import "./style.css";
import { useState, useEffect } from "react";

const formatDate = (date) => date.toLocaleString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const Clock = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </div>
  );
};

export default Clock;