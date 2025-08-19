import React, { useState } from "react";
import { colorNameToHex } from "./colorData";
import "./styles.css";

const ColorExplorer = () => {
  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
        />
        <button data-testid="search-button">🔍</button>
      </div>
      <div className="color-box" data-testid="color-box">
        <div
          className="preview"
          role="presentation"
          data-testid="color-preview"
        ></div>
        <p data-testid="color-name">
          <strong>Name:</strong>
        </p>
        <p data-testid="color-hex">
          <strong>Hex:</strong>
        </p>
      </div>
    </div>
  );
};

export default ColorExplorer;
