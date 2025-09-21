import React, { useState } from "react";
import "./styles.css";

function EvenOrOddChecker() {
  const [userInput, setUserInput] = useState("");
  const [resultStatus, setResultStatus] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleCheck = (value) => {
    value = value.trim();
    setResultStatus(""); // clear old result
    setIsLoading(true);

    // compute the result first
    let result = "";
    if (!isNaN(Number(value)) && value !== "") {
      if (Number(value) % 2 === 0) {
        result = `The number ${value} is even.`;
      } else {
        result = `The number ${value} is odd.`;
      }
    } else {
      result = "Please enter a valid number.";
    }

    // show result after 1 second
    setTimeout(() => {
      setResultStatus(result);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        data-testid="number-input"
      />
      <button
        className="check-button"
        data-testid="check-button"
        onClick={() => handleCheck(userInput)}
      >
        Check
      </button>

      <div className="result-area">
        {loading && (
          <div className="result" data-testid="loading">
            Checking...
          </div>
        )}
        {!loading && (
          <div className="result" data-testid="result">
            {resultStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
