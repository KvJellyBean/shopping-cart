import {
  faShoppingCart,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import {
  handleAddButton,
  handleSubtractButton,
  handleInput,
  handleAddToCart,
} from "../utils/Handler";
import { renderRatingStars } from "../utils/RenderStar";

export const GameDetail = () => {
  const { games, setCart } = useOutletContext();
  const [quantity, setQuantity] = useState(1);
  const gameID = useParams().gameID;
  const theGame = games.find((game) => game.gameID === gameID);

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
    handleAddToCart(theGame, quantity, setCart);
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen p-8 py-16 pt-[8.5rem]"
      data-testid="game-detail"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center mx-auto lg:w-4/5">
          <img
            alt={theGame.title + " Image Cover"}
            className="object-cover object-center w-full rounded-lg lg:w-1/2 xl:w-[25rem] transition duration-200 transform hover:scale-105"
            src={theGame.thumb}
            data-testid="game-image"
          />
          <div className="flex flex-col w-full gap-4 mt-6 lg:w-1/2 lg:px-10 lg:py-6 lg:mt-0">
            <h2
              className="mb-1 text-2xl font-bold text-gray-900 md:text-3xl"
              data-testid="game-title"
            >
              {theGame.title}
            </h2>

            <p
              className="leading-relaxed text-justify xl:text-lg"
              data-testid="game-description"
            >
              Follow an epic storyline filled with memorable characters and
              unexpected twists. The narrative of {theGame.title} is crafted to
              captivate your imagination and keep you invested from start to
              finish.
            </p>

            <div
              className="flex items-center xl:text-lg"
              data-testid="game-rating"
            >
              <p className="mr-2">Rating:</p>
              {renderRatingStars(theGame.dealRating)}
              <span className="ml-2">{theGame.dealRating}</span>
            </div>

            <div className="flex items-center justify-start">
              <button
                className="flex items-center justify-center w-8 h-8 duration-100 border cursor-pointer rounded-l-md border-[#d2d0d0] hover:bg-primary hover:text-background"
                onClick={handleSubtractButtonClick}
                data-testid="subtract-button"
              >
                −
              </button>
              <input
                type="text"
                name="quantity"
                className="flex items-center justify-center w-12 h-8 px-4 border-t border-b cursor-text border-[#d2d0d0] text-center"
                value={quantity}
                onChange={handleInputChange}
                min={1}
                data-testid="quantity-input"
              ></input>
              <button
                className="flex items-center justify-center w-8 h-8 duration-100 border cursor-pointer rounded-r-md border-[#d2d0d0] hover:bg-primary hover:text-background"
                onClick={handleAddButtonClick}
                data-testid="add-button"
              >
                +
              </button>
            </div>
            <div className="flex">
              <span
                className="text-2xl font-medium text-gray-900 title-font"
                data-testid="normal-price"
              >
                ${theGame.normalPrice}
              </span>
            </div>
            <button
              onClick={handleAddToCartClick}
              className="flex items-center justify-center w-full px-6 py-2 text-lg font-bold capitalize rounded text-background bg-primary hover:brightness-125"
              data-testid="add-to-cart-button"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
              Add to cart
            </button>
            <Link
              to={-1}
              className="flex items-center justify-center w-full px-6 py-2 text-lg font-bold capitalize border-2 rounded text-primary bg-background hover:brightness-95"
              aria-label="Link to previous page"
              data-testid="go-back-button"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
