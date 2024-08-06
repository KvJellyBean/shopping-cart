import React from "react";
import { Link } from "react-router-dom";

export const FooterNavLinks = () => {
  return (
    <div data-testid="footer-nav">
      <h4 className="text-lg font-heading max-sm:text-[1rem]">Navigation</h4>
      <div className="flex flex-col gap-2 mt-2">
        <Link to="/" aria-label="Link to home page">
          Home
        </Link>
        <Link to="/games" aria-label="Link to games center">
          Games
        </Link>
        <Link to="/about" aria-label="Link to about us page">
          About Us
        </Link>
      </div>
    </div>
  );
};
