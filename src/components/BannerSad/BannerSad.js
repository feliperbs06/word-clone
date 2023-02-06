import React from "react";

function BannerSad({ answer, reloadGame }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <p>
        <button onClick={() => reloadGame()}>Play again ?</button>
      </p>
    </div>
  );
}

export default BannerSad;
