import React from "react";

import { KEYBOARD } from "../../keyboard";
import { windowAlert } from "../../utils";

function Keyboard({ setGuess, guess, handleGuess, letters }) {
  function handleClick(event) {
    const letter = event.target.innerText;
    if (letter) {
      if (guess.length >= 5) {
        windowAlert();
        return;
      }
      setGuess(guess + letter);
    } else if (event.target.id === "enter") {
      if (guess.length === 5) {
        handleGuess(guess);
        setGuess("");
      } else {
        windowAlert();
        return;
      }
    } else if (event.target.id === "clear") {
      setGuess("");
    }
  }

  function buttonStyle(letter) {
    let style = "keyboard-box-button";
    if (letters.correct.has(letter)) {
      style = `${style} correct`;
    } else if (letters.misplaced.has(letter)) {
      style = `${style} misplaced`;
    } else if (letters.incorrect.has(letter)) {
      style = `${style} incorrect`;
    }
    return style;
  }

  return (
    <div className="keyboard">
      {KEYBOARD.map((row, indexRow) => (
        <div className="keyboard-row" key={indexRow}>
          {row.map((letter, indexLetter) => (
            <button
              key={indexLetter}
              className={buttonStyle(letter)}
              onClick={handleClick}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
