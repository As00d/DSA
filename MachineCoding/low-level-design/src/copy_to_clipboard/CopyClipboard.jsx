import { use, useState } from "react";
import "./styles.css";
function CopyClipboard() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleCopy(value) {
    if (!value || value.trim().length == 0) {
      setError("Type some values to copy");
    } else {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          setSuccess("✓ Copied!");
          setError("");
          setTimeout(() => {
            setSuccess("");
          }, 2000);
        })
        .catch(() => setError("Type some values to copy"));
    }
  }

  return (
    <div className="copyToClipboard">
      <h1 className="text-xl">Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              handleCopy(inputValue);
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
          {<p data-testid="error-message">{error}</p>}
          {<p data-testid="copied-message">{success}</p>}
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;
