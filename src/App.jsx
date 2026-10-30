import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";
import TimeZoneManager from "./components/TimeZoneManager";
import AlarmPanel from "./components/AlarmPanel";

import useClock from "./hooks/useClocks";

import {
  defaultTimeZones,
} from "./utils/timezones";

import "./App.css";

function App() {

  const now = useClock();

  const [darkMode, setDarkMode] =
    useState(() => {

      return (
        localStorage.getItem(
          "clock-theme"
        ) === "dark"
      );

    });

  const [zones, setZones] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "clock-zones"
        );

      return saved
        ? JSON.parse(saved)
        : defaultTimeZones;
    });

  useEffect(() => {

    localStorage.setItem(
      "clock-theme",
      darkMode ? "dark" : "light"
    );

  }, [darkMode]);

  useEffect(() => {

    localStorage.setItem(
      "clock-zones",
      JSON.stringify(zones)
    );

  }, [zones]);

  const addZone = (id) => {

    if (!zones.includes(id)) {

      setZones((previous) => [
        ...previous,
        id,
      ]);

    }
  };

  const removeZone = (id) => {

    setZones((previous) =>
      previous.filter(
        (zone) => zone !== id
      )
    );
  };

  return (
    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="dashboard">

        {/* Main Clock */}

        <section className="hero-section">

          <div className="hero-clock">

            <div className="clock-title">
              <span className="status-dot" />
              LOCAL TIME
            </div>

            <AnalogClock date={now} />

            <DigitalClock date={now} />

          </div>

          <div className="hero-info">

            <h2>
              Your Time,
              <br />
              Anywhere.
            </h2>

            <p>
              Track time around the world,
              manage alarms and stay
              synchronized across time zones.
            </p>

            <div className="stats">

              <div>
                <strong>
                  {zones.length}
                </strong>

                <span>
                  Time Zones
                </span>
              </div>

              <div>
                <strong>
                  {now
                    .getSeconds()
                    .toString()
                    .padStart(2, "0")}
                </strong>

                <span>
                  Seconds
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* World Clocks */}

        <TimeZoneManager
          zones={zones}
          now={now}
          onAdd={addZone}
          onRemove={removeZone}
        />

        {/* Alarms */}

        <AlarmPanel />

      </main>

      <footer>
        Chronos • Real-time World Clock Dashboard
      </footer>

    </div>
  );
}

export default App;