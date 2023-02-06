import React from "react";
import { windowAlert } from "../../utils";

function GuessInput({ handleGuess, status, guess, setGuess }) {
  function handleSubmmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      windowAlert();
      return;
    }

    handleGuess(guess);
    setGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmmit(event)}
    >
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        disabled={status === "won" || status === "lose"}
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
