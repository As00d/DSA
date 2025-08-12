import React, { useState } from "react";
import "./styles.css";
export default function LeapYear() {
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleButtonClick = () => {
    if (userInput.trim().length === 0) {
      setError("Please enter a year");
      setMessage("");
    } else if (!Number(userInput) && Number(userInput) !== 0) {
      setMessage(`${Number(userInput)} is not a number`);
      setError("");
    } else if (
      Number(userInput) % 400 === 0 ||
      (Number(userInput) % 4 == 0 && Number(userInput) % 100 !== 0)
    ) {
      setMessage(`${Number(userInput)} is a Leap Year`);
      setError("");
    } else {
      setMessage(`${Number(userInput)} is not a Leap Year`);
      setError("");
    }
  };
  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button data-testid="check-btn" onClick={() => handleButtonClick()}>
        Check
      </button>
      {message && <p data-testid="result">{message}</p>}
      {error && <p data-testid="error-msg">{error}</p>}
    </div>
  );
}
