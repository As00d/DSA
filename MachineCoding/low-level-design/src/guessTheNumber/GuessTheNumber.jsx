import React, { useState } from "react";
import "./styles.css";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function GuessTheNumber() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(1);
  const [result, setResult] = useState("");
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  // Function to handle guess checking
  const handleGuess = (input) => {
    console.log(input);
    if (
      input === "" ||
      isNaN(Number(input)) ||
      Number(input) < 1 ||
      Number(input) > 100
    ) {
      setResult("Please enter a number between 1 and 100.");
      return;
    } else if (Number(input) < numberToGuess) {
      setResult("Too low! Try again.");
    } else if (Number(input) > numberToGuess) {
      setResult("Too high! Try again.");
    } else if (Number(input) === numberToGuess) {
      setResult(
        `Congratulations! You guessed the number in ${count} attempts.`
      );
    }
    setCount((count) => count + 1);
  };

  // Function to reset the game
  const resetGame = () => {
    setUserInput("");
    setCount(0);
    setResult("");
    setNumberToGuess(getRandomNumber());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <div style={{ margin: "5px 5px" }}>
        <button onClick={() => handleGuess(userInput)}>Check Guess</button>
        <button onClick={() => resetGame()}>Reset Game</button>
      </div>
      <div>{result}</div>
    </div>
  );
}

export default GuessTheNumber;
