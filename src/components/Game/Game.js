import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import Keyboard from "../Keyboard/Keyboard";

import { checkGuess } from "../../game-helpers";
import { unionSet } from "../../utils";
import { WORDS } from "../../data";
import { sample } from "../../utils";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [letters, setLetters] = React.useState({
    correct: new Set(),
    misplaced: new Set(),
    incorrect: new Set(),
  });
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [count, setCount] = React.useState(1);
  const [status, setStatus] = React.useState("game");

  function handleGuess(guess) {
    guess = checkGuess(guess, answer);
    handleLetters(guess);

    setGuesses([...guesses, guess]);
    verifyGuessCorrect(guess);
  }

  function verifyGuessCorrect(guess) {
    const isCorrect = guess.every((letter) => letter.status === "correct");

    if (isCorrect) {
      setStatus("won");
    } else if (count >= 6) {
      setStatus("lose");
    } else {
      setCount(count + 1);
    }
  }

  function handleLetters(guess) {
    const correct = filterGuess(guess, "correct");
    const misplaced = filterGuess(guess, "misplaced");
    const incorrect = filterGuess(guess, "incorrect");

    setLetters({
      correct: unionSet(new Set(letters.correct), new Set(correct)),
      misplaced: unionSet(new Set(letters.misplaced), new Set(misplaced)),
      incorrect: unionSet(new Set(letters.incorrect), new Set(incorrect)),
    });
  }

  function filterGuess(guess, status) {
    return guess
      .filter((letter) => letter.status === status)
      .map((letter) => letter.letter);
  }

  function reloadGame() {
    setAnswer(sample(WORDS));
    setStatus("game");
    setGuesses([]);
    setCount(1);
    setGuess("");
    setLetters({
      correct: new Set(),
      misplaced: new Set(),
      incorrect: new Set(),
    });
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <Banner status={status} answer={answer} reloadGame={reloadGame} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        status={status}
        handleGuess={handleGuess}
      />
      {status === "game" && (
        <Keyboard
          guess={guess}
          setGuess={setGuess}
          handleGuess={handleGuess}
          letters={letters}
        />
      )}
    </>
  );
}

export default Game;
