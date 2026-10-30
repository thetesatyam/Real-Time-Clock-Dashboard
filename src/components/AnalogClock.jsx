import React from "react";

function AnalogClock({ date }) {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="analog-clock">

      <div className="clock-number number-12">12</div>
      <div className="clock-number number-3">3</div>
      <div className="clock-number number-6">6</div>
      <div className="clock-number number-9">9</div>

      <div
        className="clock-hand hour-hand"
        style={{
          transform: `translateX(-50%) rotate(${hourAngle}deg)`,
        }}
      />

      <div
        className="clock-hand minute-hand"
        style={{
          transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
        }}
      />

      <div
        className="clock-hand second-hand"
        style={{
          transform: `translateX(-50%) rotate(${secondAngle}deg)`,
        }}
      />

      <div className="clock-center" />

    </div>
  );
}

export default AnalogClock;