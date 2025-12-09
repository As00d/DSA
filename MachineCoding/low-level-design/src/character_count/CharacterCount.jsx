import { useState } from "react";

function CharacterCount() {
  const [maxLength, setMaxLength] = useState(50);
  const [textInput, setTextInput] = useState("");
  const [warn, setWarn] = useState(null);
  const [error, setError] = useState(null);
  function handleChange(e) {
    const newValue = e.target.value;
    setTextInput(newValue);
    const warnThreshold = Math.floor((9 * maxLength) / 10);

    if (newValue.length > maxLength) {
      setError(`Limit exceeded by ${newValue.length - maxLength} characters`);
      setWarn(null);
    } else if (newValue.length >= warnThreshold) {
      setWarn("You are close to the limit!");
      setError(null);
    } else {
      setWarn(null);
      setError(null);
    }
  }
  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              data-testid="maxlength"
              value={maxLength}
              onChange={(e) => setMaxLength(e.target.value)}
            />
          </label>
        </div>
        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          value={textInput}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <div className="char-info" data-testid="char-info">
          {textInput.length + " / " + maxLength}
        </div>
        <div className="warnings">
          {warn && (
            <p className="warning-text" data-testid="warning-text">
              {warn}
            </p>
          )}
          {error && (
            <p className="error-message" data-testid="error-text">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;
