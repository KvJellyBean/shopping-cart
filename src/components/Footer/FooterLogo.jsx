import React from "react";
import { Link } from "react-router-dom";

export const FooterLogo = () => {
  return (
    <div
      className="flex flex-col gap-4 w-[280px] lg:w-[30%]"
      data-testid="footer-logo"
    >
      <Link
        className="flex items-center cursor-pointer ml-[-.75rem]"
        to="/"
        aria-label="Link to home page - Gamelly"
      >
        <img
          src="/gamelly.png"
          alt="Gamelly Logo"
          className="w-[45px] h-[30px] object-cover invert-[1]"
        />
        <h3 className="text-xl font-bold uppercase font-heading max-sm:text-[1rem]">
          Gamelly
        </h3>
      </Link>

      <p className="text-justify">
        Experience the game that will change your the way you play.
      </p>
    </div>
  );
};
