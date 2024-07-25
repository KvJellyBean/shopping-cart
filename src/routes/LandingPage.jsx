import React from "react";
import { Hero } from "../components/LandingPage/Hero/Hero";
import { NewRelease } from "../components/LandingPage/NewRelease";
import { Genre } from "../components/LandingPage/Genre/Genre";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <NewRelease />
      <Genre />
    </>
  );
};
