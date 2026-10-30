import React, { useState } from "react";
import {
  availableTimeZones,
} from "../utils/timezones";

import TimeZoneCard from "./TimeZoneCard";

function TimeZoneManager({
  zones,
  now,
  onAdd,
  onRemove,
}) {

  const [selectedZone, setSelectedZone] = useState("");

  const handleAdd = () => {

    if (!selectedZone) return;

    onAdd(selectedZone);

    setSelectedZone("");
  };

  return (
    <section className="section">

      <div className="section-header">

        <div>
          <h2>World Clocks</h2>
          <p>
            Monitor time across different regions
          </p>
        </div>

        <div className="timezone-controls">

          <select
            value={selectedZone}
            onChange={(e) =>
              setSelectedZone(e.target.value)
            }
          >

            <option value="">
              Select timezone
            </option>

            {availableTimeZones
              .filter(
                (zone) =>
                  !zones.includes(zone.id)
              )
              .map((zone) => (
                <option
                  key={zone.id}
                  value={zone.id}
                >
                  {zone.flag} {zone.city}
                </option>
              ))}

          </select>

          <button
            className="primary-button"
            onClick={handleAdd}
          >
            + Add
          </button>

        </div>

      </div>

      <div className="timezone-grid">

        {zones.map((id) => {

          const zone =
            availableTimeZones.find(
              (item) => item.id === id
            );

          if (!zone) return null;

          return (
            <TimeZoneCard
              key={id}
              zone={zone}
              now={now}
              onRemove={onRemove}
            />
          );
        })}

      </div>

    </section>
  );
}

export default TimeZoneManager;