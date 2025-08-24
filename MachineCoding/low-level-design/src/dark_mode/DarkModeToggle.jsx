import React, { useEffect, useState } from "react";
import "./styles.css";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={isDarkMode ? "dark-mode container" : "light-mode container"}
    >
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onClick={() => setIsDarkMode(!isDarkMode)} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {isDarkMode ? `Dark Mode` : `Light Mode`}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
