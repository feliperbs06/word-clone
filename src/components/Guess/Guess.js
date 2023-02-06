import React from "react";

function Guess({ guess }) {
  const styleCell = "cell";

  return (
    <p className="guess">
      {guess.map((guess, index) => (
        <span
          key={index}
          className={guess ? `${styleCell} ${guess.status}` : styleCell}
        >
          {guess && guess.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
