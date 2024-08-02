import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const HeaderNavLinks = ({ isActive }) => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <ul className="flex items-center gap-4">
      {links.map((link) => (
        <li key={link.path} className="flex">
          <Link
            to={link.path}
            className={`px-2 transition duration-200 border-b-2 hover:font-bold hover:border-primary ${
              isActive(link.path)
                ? "font-bold border-primary"
                : "border-transparent"
            }`}
            aria-label={`Link to ${link.label} page`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

HeaderNavLinks.propTypes = {
  isActive: PropTypes.func.isRequired,
};
