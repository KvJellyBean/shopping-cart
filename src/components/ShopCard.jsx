import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  handleAddButton,
  handleSubtractButton,
  handleInput,
  handleAddToCart,
} from "../utils/Handler";

export const ShopCard = ({ game, setCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddButtonClick = () => {
    handleAddButton(quantity, setQuantity);
  };

  const handleSubtractButtonClick = () => {
    handleSubtractButton(quantity, setQuantity);
  };

  const handleInputChange = (e) => {
    handleInput(e, setQuantity);
  };

  const handleAddToCartClick = () => {
    handleAddToCart(game, quantity, setCart);
  };

  return (
    <div
      className="relative flex w-full max-w-[16rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      data-testid="game-item"
    >
      <Link
        className="relative flex items-center justify-center mx-3 mt-3 overflow-hidden rounded-xl"
        to={`/games/${game.gameID}`}
        aria-label={`Link to game - ${game.title}`}
      >
        <img
          className="object-cover w-full transition duration-200 transform hover:scale-105 hover:brightness-110"
          src={game.thumb}
          alt={game.title + " Image"}
          data-testid="game-image"
        />
      </Link>

      <div className="px-5 pb-5 mt-4">
        <Link
          to={`/games/${game.gameID}`}
          aria-label={`Link to game - ${game.title}`}
          data-testid="game-title"
        >
          <h3 className="text-xl tracking-tight text-center capitalize transition duration-200 hover:text-primary h-[3.25rem] overflow-auto h5-scrollable">
            {game.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-2 mb-5">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${Number(game.normalPrice).toFixed(2).split(".")[0]}
              <span className="text-sm">
                .{Number(game.normalPrice).toFixed(2).split(".")[1]}
              </span>
            </span>
          </p>

          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center h-8 px-2 text-2xl border rounded-l-md hover:bg-primary hover:border-text hover:text-background"
              onClick={handleSubtractButtonClick}
              data-testid="subtract-button"
            >
              −
            </button>
            <label
              htmlFor={`quantity-${game.gameID}`}
              className="hidden"
              aria-label="Quantity input label"
            >
              Quantity
            </label>
            <input
              type="text"
              id={`quantity-${game.gameID}`}
              name="quantity"
              className="w-10 h-8 text-center border-t border-b text-text"
              value={quantity}
              onInput={handleInputChange}
              min={1}
              aria-label="Quantity input field"
              data-testid="quantity-input"
            />
            <button
              className="flex items-center justify-center h-8 px-2 text-2xl border rounded-r-md hover:bg-primary hover:border-text hover:text-background"
              onClick={handleAddButtonClick}
              data-testid="add-button"
            >
              +
            </button>
          </div>
        </div>

        <button
          href="#"
          onClick={handleAddToCartClick}
          className="flex items-center w-full justify-center bg-text rounded-md px-5 py-2.5 text-center text-background capitalize font-bold hover:brightness-110 hover:bg-primary hover:border-primary hover:border transition duration-200 h-[2.5rem]"
          data-testid="add-to-cart-button"
        >
          <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  game: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};
