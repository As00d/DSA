import React, { useState } from "react";
import { colorNameToHex } from "./colorData";
import "./styles.css";

const ColorExplorer = () => {
  const [input, setInput] = useState("");
  const [hexColor, setHexColor] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const handleSearch = (input) => {
    setError("");
    let hexColor = colorNameToHex(input.toLowerCase().split(" ").join(""));
    if (hexColor) {
      setHexColor(hexColor);
      setName(input);
    } else {
      setError(`Sorry, I could'nt recognize the error`);
    }
  };
  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button data-testid="search-button" onClick={() => handleSearch(input)}>
          🔍
        </button>
      </div>
      {!error ? (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ background: hexColor }}
          ></div>
          <p data-testid="color-name">
            <strong>Name:{name}</strong>
          </p>
          <p data-testid="color-hex">
            <strong>Hex:{hexColor}</strong>
          </p>
        </div>
      ) : (
        <div data-testid="error-msg">{error} </div>
      )}
    </div>
  );
};

export default ColorExplorer;
