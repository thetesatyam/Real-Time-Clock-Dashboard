import React, { useEffect, useState } from "react";

function AlarmPanel() {

  const [alarms, setAlarms] = useState(() => {

    const saved =
      localStorage.getItem("clock-alarms");

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [alarmTime, setAlarmTime] =
    useState("");

  useEffect(() => {

    localStorage.setItem(
      "clock-alarms",
      JSON.stringify(alarms)
    );

  }, [alarms]);

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();

      const currentTime =
        now.toTimeString().slice(0, 5);

      setAlarms((previous) =>
        previous.map((alarm) => {

          if (
            alarm.enabled &&
            alarm.time === currentTime &&
            !alarm.triggered
          ) {

            alert(
              `⏰ Alarm: ${alarm.label}`
            );

            return {
              ...alarm,
              triggered: true,
            };
          }

          return alarm;
        })
      );

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const addAlarm = () => {

    if (!alarmTime) return;

    const newAlarm = {
      id: Date.now(),
      time: alarmTime,
      label: "Alarm",
      enabled: true,
      triggered: false,
    };

    setAlarms((previous) => [
      ...previous,
      newAlarm,
    ]);

    setAlarmTime("");
  };

  const toggleAlarm = (id) => {

    setAlarms((previous) =>
      previous.map((alarm) =>
        alarm.id === id
          ? {
              ...alarm,
              enabled: !alarm.enabled,
              triggered: false,
            }
          : alarm
      )
    );
  };

  const deleteAlarm = (id) => {

    setAlarms((previous) =>
      previous.filter(
        (alarm) => alarm.id !== id
      )
    );
  };

  return (
    <section className="alarm-section">

      <div className="section-header">

        <div>
          <h2>Alarms</h2>
          <p>
            Schedule and manage your alarms
          </p>
        </div>

        <div className="alarm-create">

          <input
            type="time"
            value={alarmTime}
            onChange={(e) =>
              setAlarmTime(e.target.value)
            }
          />

          <button
            className="primary-button"
            onClick={addAlarm}
          >
            + Set Alarm
          </button>

        </div>

      </div>

      <div className="alarm-list">

        {alarms.length === 0 ? (

          <div className="empty-state">
            No alarms configured.
          </div>

        ) : (

          alarms.map((alarm) => (

            <div
              className="alarm-card"
              key={alarm.id}
            >

              <div>

                <div className="alarm-time">
                  {alarm.time}
                </div>

                <span>
                  {alarm.enabled
                    ? "Active"
                    : "Disabled"}
                </span>

              </div>

              <div className="alarm-actions">

                <button
                  onClick={() =>
                    toggleAlarm(alarm.id)
                  }
                  className={
                    alarm.enabled
                      ? "active-button"
                      : "secondary-button"
                  }
                >
                  {alarm.enabled
                    ? "ON"
                    : "OFF"}
                </button>

                <button
                  className="delete-button"
                  onClick={() =>
                    deleteAlarm(alarm.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default AlarmPanel;