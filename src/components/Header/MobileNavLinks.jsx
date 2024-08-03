import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const MobileNavLinks = ({ isActive, cartLength, closeMenu }) => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    { path: "/cart", label: `My Cart ${cartLength}` },
    { path: "/about", label: "About Us" },
  ];

  return (
    <nav
      className="absolute left-0 right-0 p-4 pt-16 pb-6 text-center max-[640px]:top-[4.85rem] top-[4.7rem] bg-background transition-transform duration-300 border-b-[2.5px]"
      data-testid="header-mobile-navlinks"
    >
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.path} className="flex">
            <Link
              to={link.path}
              className={`w-full px-2 py-2 transition duration-200 border-2 hover:font-bold hover:border-text max-md:hover:bg-primary max-md:hover:text-background ${
                isActive(link.path)
                  ? "font-bold text-background border-text bg-primary"
                  : "border-transparent"
              }`}
              onClick={closeMenu}
              aria-label={`Link to ${link.label} page`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MobileNavLinks.propTypes = {
  isActive: PropTypes.func.isRequired,
  cartLength: PropTypes.number.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
