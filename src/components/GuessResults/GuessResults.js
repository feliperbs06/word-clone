import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED).map((index) => {
    const emptyRow = range(5).map(() => undefined);
    return guesses[index] || emptyRow;
  });

  return (
    <div className="guess-results">
      <div className="guess-results">
        {rows.map((guess, index) => (
          <Guess guess={guess} key={index} />
        ))}
      </div>
    </div>
  );
}

export default GuessResults;
