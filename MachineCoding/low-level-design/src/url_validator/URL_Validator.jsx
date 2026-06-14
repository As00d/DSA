import { useState } from "react";

export const URL_Validator = () => {
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const handleUserInput = (value) => {
    setUserInput(value);
    if (
      !(value.startsWith("http://") || value.startsWith("https://")) ||
      value.includes(" ") ||
      !(value.includes("localhost") || value.includes("."))
    ) {
      setError("Invalid URL");
    } else {
      setError("Valid URL");
    }
  };
  return (
    <div>
      <h1>URL Validator</h1>
      <input
        type="text"
        placeholder="Enter a URL"
        value={userInput}
        onChange={(e) => handleUserInput(e.target.value)}
        data-testid="url-input"
      />
      <p
        style={{ color: error === "Valid URL" ? "green" : "red" }}
        data-testid="result"
      >
        {error}
      </p>
    </div>
  );
};
