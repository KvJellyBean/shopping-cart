import React from "react";
import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  return (
    <Link
      className="flex items-center pr-2 cursor-pointer"
      to="/"
      aria-label="Link to Gamelly home page - Gamelly"
      data-testid="logo"
    >
      <img
        src="/gamelly.png"
        alt="Gamelly Logo"
        className="w-[55px] h-[40px] object-cover"
      />
      <h1 className="text-xl font-bold uppercase font-heading max-sm:text-[1rem]">
        Gamelly
      </h1>
    </Link>
  );
};
