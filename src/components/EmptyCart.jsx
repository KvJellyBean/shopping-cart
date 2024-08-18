import React from "react";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-4"
      data-testid="empty-cart"
    >
      <div className="p-12 py-16 text-center bg-white border-[2.5px] rounded-lg shadow-xl w-fit">
        <div className="flex justify-center mb-4">
          <img src="https://i.imgur.com/dCdflKN.png" alt="Empty Cart" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
          Your Cart is Empty.
        </h2>
        <p className="my-2 mb-8 text-gray-600 md:text-xl">
          You have no games in your cart.
        </p>
        <Link
          to="/games"
          className="p-4 font-bold rounded-md bg-primary text-background hover:text-primary hover:bg-background hover:border-2 md:text-lg"
          aria-label="Link to games center"
        >
          Browse Games
        </Link>
      </div>
    </div>
  );
};
