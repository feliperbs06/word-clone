import React from "react";

function BannerHappy({ count, reloadGame }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{count} guesses</strong>.
      </p>
      <p>
        <button onClick={() => reloadGame()}>Play again ?</button>
      </p>
    </div>
  );
}

export default BannerHappy;
