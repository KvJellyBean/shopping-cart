import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavLinks } from "./HeaderNavLinks";
import { MobileNavLinks } from "./MobileNavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const Header = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="bg-background fixed z-[999] left-0 right-0 flex justify-between px-10 py-4 border-b-[3.25px] border-text  max-sm:px-4 max-sm:py-[1.1rem] max-sm:pr-6"
      data-testid="header"
    >
      <HeaderLogo />

      <nav
        className="flex items-center text-[1.15rem] max-md:hidden"
        data-testid="header-navlinks"
      >
        <HeaderNavLinks isActive={isActive} />
      </nav>

      <div className="hidden items-center text-[1.15rem] max-md:flex">
        <button onClick={() => handleMenu()} aria-label="navigation button">
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="text-[1.5rem] cursor-pointer"
          />
        </button>

        {isOpen && (
          <MobileNavLinks
            isActive={isActive}
            cartLength={cartLength}
            closeMenu={closeMenu}
          />
        )}
      </div>

      <Link
        to="/cart"
        className="flex items-center gap-4 p-2 px-5 pr-6 cart text-[1.15rem] bg-primary text-background [clip-path:polygon(100%_0%,100%_70%,90%_100%,0%_100%,0%_0%)] transition duration-200 hover:brightness-[115%] font-bold max-md:hidden"
        aria-label={`Link to My Cart page with shopping cart icon and ${cartLength} items - My Cart`}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <p>My Cart</p>
        <span>{cartLength}</span>
      </Link>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
};
