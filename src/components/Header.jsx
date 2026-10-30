import React from "react";

function Header({
  darkMode,
  setDarkMode,
}) {

  return (
    <header className="header">

      <div className="logo">

        <div className="logo-icon">
          ◷
        </div>

        <div>
          <h1>Chronos</h1>
          <span>World Clock Dashboard</span>
        </div>

      </div>

      <div className="header-actions">

        <div className="live-indicator">
          <span />
          LIVE
        </div>

        <button
          className="theme-button"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </header>
  );
}

export default Header;