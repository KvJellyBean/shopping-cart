import React from "react";
import genre1 from "/genre1.jpeg";
import genre2 from "/genre2.jpeg";
import genre3 from "/genre3.jpeg";
import genre4 from "/genre4.jpeg";
import { GenreCard } from "./GenreCard";

export const Genre = () => {
  const genres = [
    { imageUrl: genre1, name: "Action" },
    { imageUrl: genre2, name: "Adventure" },
    { imageUrl: genre3, name: "RPG" },
    { imageUrl: genre4, name: "Strategy" },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center gap-20 px-4 py-16 text-center sm:py-18"
      data-testid="genre"
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-bold font-heading text-primary text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] capitalize">
          Conquer Top Genres
        </h2>
        <p className="text-[1rem] sm:text-[1.25rem] lg:text-[1.35rem]">
          Discover games across all your favorite genres.
          <br />
          Find the perfect game for every mood and style.
        </p>
      </div>

      <div className="grid grid-flow-col grid-cols-1 grid-rows-4 gap-28 md:grid-cols-2 md:grid-rows-2 place-items-center">
        {genres.map((genre, index) => (
          <GenreCard
            key={index}
            imageUrl={genre.imageUrl}
            genreName={genre.name}
          />
        ))}
      </div>
    </section>
  );
};
