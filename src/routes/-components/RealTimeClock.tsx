import React from "react";
import { format } from "date-fns";
interface RealTimeClockProps {}

export function RealTimeClock({}: RealTimeClockProps) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  });

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="text-6xl font-bold flex justify-center w-full flex-wrap break-words gap-2 p-2 glass">
      <div>{format(time, "	PPPP")}</div>
      <div className="text-primary">
        {`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
      </div>
    </div>
  );
}
