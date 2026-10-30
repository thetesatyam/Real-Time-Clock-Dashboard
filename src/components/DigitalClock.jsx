import React from "react";

function DigitalClock({ date }) {
  const time = date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const dateString = date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="digital-clock">

      <div className="digital-time">
        {time}
      </div>

      <div className="digital-date">
        {dateString}
      </div>

    </div>
  );
}

export default DigitalClock;