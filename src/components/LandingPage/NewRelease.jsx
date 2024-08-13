import React from "react";
import { Link } from "react-router-dom";
import game1 from "/game1.jpeg";
import game2 from "/game2.jpeg";
import game3 from "/game3.jpeg";
import character2 from "/character2.png";
import decoration from "/decoration.png";

export const NewRelease = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-12 px-4 py-16 text-center sm:py-18"
      data-testid="new-release"
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-bold font-heading text-primary text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] capitalize">
          Unleash the Latest Hits
        </h2>
        <p className="text-[1rem] sm:text-[1.25rem] lg:text-[1.35rem]">
          Stay updated with the newest game releases.
          <br />
          Dive into fresh adventures and cutting-edge gameplay.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="outerCard2 min-[425px]:w-[350px] lg:absolute xl:left-[13%] z-[5] lg:max-xl:w-[290px] lg:max-xl:left-[5%]">
          <Link
            className="flex flex-col items-center gap-4 p-12 card2"
            to="/games"
            aria-label="Link to games center"
          >
            <img
              src={game1}
              alt="Image of Intense Survival Game"
              className="w-[180px]"
            />
            <p className="font-heading">Intense Survival Gameplay</p>
            <p className="text-[.9rem]">
              Test your skills in the toughest survival games.
            </p>
          </Link>
        </div>

        <div className="outerCard2 min-[425px]:w-[350px] lg:absolute xl:right-[10%] xl:top-[35%] z-[5] lg:max-xl:w-[290px] lg:max-xl:right-[3%] lg:max-xl:top-[35%]">
          <Link
            className="flex flex-col items-center gap-4 p-12 card2"
            to="/games"
            aria-label="Link to games center"
          >
            <img
              src={game2}
              alt="Image of Cooperative Multiplayer Game"
              className="w-[180px]"
            />
            <p className="font-heading">Cooperative Multiplayer</p>
            <p className="text-[.9rem]">
              Join forces with friends for team-based fun.
            </p>
          </Link>
        </div>

        <div className="outerCard2 min-[425px]:w-[350px] lg:absolute xl:left-[10%] xl:bottom-[5%] z-[5] lg:max-xl:w-[290px] lg:max-xl:left-[3%] lg:max-xl:bottom-[4%]">
          <Link
            className="flex flex-col items-center gap-4 p-12 card2"
            to="/games"
            aria-label="Link to games center"
          >
            <img
              src={game3}
              alt="Image of Tactical Combat and Customization Game"
              className="w-[180px]"
            />
            <p className="font-heading">Tactical Combat and Customization</p>
            <p className="text-[.9rem]">
              Customize your gear and dominate the battlefield.
            </p>
          </Link>
        </div>

        <div className="relative flex flex-col items-center justify-center character2 md:max-lg:w-[30rem]">
          <img
            src={character2}
            alt="Character image"
            className="relative z-[2]"
          />
          <img
            src={decoration}
            alt="Character's decoration"
            className="absolute z-0 top-[5rem] sm:top-[9rem] md:top-[12rem] md:max-lg:top-[8rem]"
          />
        </div>
      </div>
    </section>
  );
};
