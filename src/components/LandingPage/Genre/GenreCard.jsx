import React from "react";
import { Link } from "react-router-dom";

export const GenreCard = ({ imageUrl, genreName }) => {
  return (
    <div className="outerCard2 min-[425px] w-[320px] z-[5] lg:max-xl:w-[290px]">
      <Link
        className="flex flex-col items-center gap-4 p-12 card2"
        to="/games"
        aria-label="Link to games center"
      >
        <img src={imageUrl} alt={`Image of ${genreName}`} className="w-full" />
        <p className="font-heading">{genreName}</p>
      </Link>
    </div>
  );
};
