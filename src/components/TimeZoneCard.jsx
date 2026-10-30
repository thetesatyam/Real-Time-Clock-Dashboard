import React from "react";

function TimeZoneCard({ zone, now, onRemove }) {

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: zone.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  const date = new Intl.DateTimeFormat("en-US", {
    timeZone: zone.timezone,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(now);

  const offset = new Intl.DateTimeFormat("en-US", {
    timeZone: zone.timezone,
    timeZoneName: "short",
  })
    .formatToParts(now)
    .find((part) => part.type === "timeZoneName")?.value;

  return (
    <div className="timezone-card">

      <div className="timezone-header">

        <div>
          <span className="flag">
            {zone.flag}
          </span>

          <div>
            <h3>{zone.city}</h3>
            <span>{zone.country}</span>
          </div>
        </div>

        <button
          className="remove-button"
          onClick={() => onRemove(zone.id)}
        >
          ×
        </button>

      </div>

      <div className="timezone-time">
        {time}
      </div>

      <div className="timezone-footer">
        <span>{date}</span>
        <span>{offset}</span>
      </div>

    </div>
  );
}

export default TimeZoneCard;