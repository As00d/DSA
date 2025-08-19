import React, { useState } from "react";
import "./styles.css";

export const checkPasswordStrength = (userInput) => {
  let condition = 0;
  let length = false,
    upper = false,
    lower = false,
    digit = false,
    special = false;
  if (userInput.length >= 8) {
    if (!length) condition++;
  }

  for (let i = 0; i < userInput.length; i++) {
    if (userInput.charCodeAt(i) >= 65 && userInput.charCodeAt(i) <= 90) {
      if (!upper) {
        upper = true;
        condition++;
      }
    }
    if (userInput.charCodeAt(i) >= 97 && userInput.charCodeAt(i) <= 122) {
      if (!lower) {
        condition++;
        lower = true;
      }
    }
    if (userInput.charCodeAt(i) >= 48 && userInput.charCodeAt(i) <= 57) {
      if (!digit) {
        digit = true;
        condition++;
      }
    }
    if (
      !(userInput.charCodeAt(i) >= 48 && userInput.charCodeAt(i) <= 57) &&
      !(userInput.charCodeAt(i) >= 97 && userInput.charCodeAt(i) <= 122) &&
      !(userInput.charCodeAt(i) >= 65 && userInput.charCodeAt(i) <= 90)
    ) {
      console.log(userInput[i]);
      if (!special) {
        special = true;
        condition++;
      }
    }
  }

  if (condition === 0) {
    return "Weak Password";
  } else if (condition === 1) {
    return "Level 1";
  } else if (condition === 2 || condition === 3) {
    return "Level 2";
  } else if (condition === 4 || condition === 5) {
    return "Level 3";
  }
};

const Password = () => {
  const [userInput, setUserInput] = useState("");
  const [test, setTest] = useState("");
  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        name=""
        id=""
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter password"
      />
      <button
        onClick={() => {
          checkPasswordStrength(userInput);
          setTest(checkPasswordStrength(userInput));
        }}
        className="border"
      >
        Check Strength
      </button>
      <p>Strength: {test}</p>
    </div>
  );
};

export default Password;
