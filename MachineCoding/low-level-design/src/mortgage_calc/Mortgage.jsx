import React, { useState } from "react";

import "./styles.css";
const Mortgage = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [calcAmount, setCalcAmount] = useState(null);
  const handleCalc = () => {
    if (!amount || !rate || !year || amount <= 0 || rate <= 0 || year <= 0) {
      setError("Invalid input");
    } else {
      setError(null);
      let r = rate / 12 / 100;
      let n = year * 12;
      let p = amount;
      let top = r * Math.pow(1 + r, n);
      let bottom = Math.pow(1 + r, n) - 1;
      let ans = p * (top / bottom);

      setCalcAmount(ans.toFixed(2));
    }
  };
  return (
    <div>
      <h2>Mortgage Calculator</h2>
      <div>
        <label htmlFor="amount" id="Loan Amount">
          Loan Amount (INR):
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rate" id="Annual Interest Rate">
          Annual Interest Rate (%):{" "}
        </label>
        <input
          type="number"
          name="rate"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year" id="Loan Term">
          Loan Term (Years):
        </label>
        <input
          type="number"
          name="year"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button onClick={handleCalc}>Calculate</button>
      {error ? (
        <p aria-label="result">Monthly Payment: {error}</p>
      ) : (
        <p aria-label="result">Monthly Payment: {calcAmount}</p>
      )}
    </div>
  );
};

export default Mortgage;
