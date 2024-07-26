import React from "react";
import { AboutCard } from "../components/AboutCard";

export const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-10 py-16 pt-[8.5rem] min-h-screen px-4 lg:px-16"
      data-testid="about"
    >
      <h2 className="text-2xl font-bold font-heading text-primary sm:text-[2rem]">
        About Us
      </h2>

      <div className="flex flex-col gap-8 mb-8 text-justify md:flex-row">
        <img
          src="/character3.png"
          alt="Character Image"
          className="object-cover w-full rounded-md md:w-1/2 xl:w-1/4"
          data-testid="about-image"
        />

        <div className="flex flex-col gap-8 xl:justify-center">
          <p className="lg:text-lg xl:text-xl">
            We are passionate about bringing you the best games from around the
            world. Our platform is designed to provide gamers with a seamless
            experience to explore, play, and conquer their favorite games.
          </p>

          <div className="flex flex-col gap-8 xl:flex-row mt-[-.75rem]">
            <AboutCard
              title={"Mission"}
              icon={"faListCheck"}
              description="Our mission is to stay ahead with top-rated games from around
                the globe, ensuring that our users have access to the latest
                hits and top genres. We aim to foster a vibrant community of
                gamers who can share their passion and experiences."
            />

            <AboutCard
              title={"Vision"}
              icon={"faThumbTack"}
              description="We envision a world where gamers can effortlessly discover and
              engage with the best games, transcending geographical
              boundaries. We strive to create a platform that is inclusive,
              dynamic, and ever-evolving to meet the needs of our community."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
