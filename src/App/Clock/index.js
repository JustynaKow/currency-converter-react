import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const Clock = () => {
    const date = useCurrentDate();

    return (
      <div className="clock">
        Dzisiaj jest
        {" "}
        {formatDate(date)}
      </div>
    );
  };

export default Clock;