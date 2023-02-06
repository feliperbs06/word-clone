import React from "react";

import BannerHappy from "../BannerHappy/BannerHappy";
import BannerSad from "../BannerSad/BannerSad";

function Banner({ status, count, answer, reloadGame }) {
  return (
    <>
      {status === "won" && (
        <BannerHappy count={count} reloadGame={reloadGame} />
      )}
      {status === "lose" && (
        <BannerSad answer={answer} reloadGame={reloadGame} />
      )}
    </>
  );
}

export default Banner;
