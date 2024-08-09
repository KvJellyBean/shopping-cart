import React from "react";
import { Link } from "react-router-dom";
import character1 from "/character1.png";
import InfoCards from "./InfoCards";

export const Hero = () => {
  return (
    <section
      className="flex justify-evenly px-8 pt-[6.5rem] max-[820px]:flex-col w-full"
      data-testid="hero"
    >
      <div className="flex flex-col gap-[4rem] left pt-4 md:pt-8 lg:pt-12 xl:pt-16">
        <div className="flex flex-col gap-6 top min-[820px]:items-start items-center">
          <h2 className="text-[2.25rem] md:text-[3rem] min-[820px]:text-left text-center xl:text-[4rem] font-heading xl:w-[50dvw] font-[600] min-[780px]:max-[1025px]:text-[2.5rem] min-[780px]:max-[1025px]:w-[55dvw]">
            Discover The Best Games Worldwide.
          </h2>

          <p className="text-1.25 min-[820px]:text-left text-center md:text-[1.35rem] xl:w-[40dvw] min-[780px]:max-[1025px]:text-[1.3rem]">
            Stay ahead with top-rated games from around the globe.
            <br /> Explore, play, and conquer!
          </p>

          <div className="flex items-center flex-row gap-8 actionBtn max-[510px]:flex-col justify-center min-[820px]:justify-start">
            <Link
              to="/games"
              className="flex max-[510px]:w-[250px] items-center gap-4 p-2 px-12 cart text-[1.25rem] max-[510px]:10rem bg-primary text-background [clip-path:polygon(100%_0%,100%_70%,90%_100%,0%_100%,0%_0%)] transition duration-200 hover:brightness-[115%] font-bold max-[510px]:indent-5"
              aria-label="Link to games center"
            >
              Browse Game
            </Link>
            <Link
              to="/about"
              className="secondaryBtn flex max-[510px]:w-[250px] items-center gap-4 p-2 px-12 cart text-[1.25rem] bg-background text-primary border-2 [clip-path:polygon(100%_0%,100%_70%,90%_100%,0%_100%,0%_0%)] transition duration-200 hover:brightness-[90%] font-bold max-[510px]:after:ml-[10rem] max-[510px]:indent-5"
              aria-label="Link to about page"
            >
              Our Profile
            </Link>
          </div>
        </div>

        <InfoCards />
      </div>

      <div className="flex items-center justify-center right">
        <div className="outerShadow"></div>
        <div className="inner"></div>
        <div className="innerShadow"></div>
        <img
          src={character1}
          alt="Hero Character"
          className="characterHero h-[88dvh] z-[5] max-[510px]:h-[60dvh] max-[375px]:h-[50dvh]"
        />
      </div>
    </section>
  );
};
