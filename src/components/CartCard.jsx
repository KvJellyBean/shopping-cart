import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  handleRemoveFromCart,
  handleUpdateQuantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
} from "../utils/Handler";

export const CartCard = ({ game, setCart }) => {
  const handleAddButton = () => {
    handleIncrementQuantity(game, setCart);
  };

  const handleSubtractButton = () => {
    handleDecrementQuantity(game, setCart);
  };

  const handleInput = (e) => {
    handleUpdateQuantity(game, e.target.value, setCart);
  };

  const handleRemoveItem = () => {
    handleRemoveFromCart(game, setCart);
  };

  return (
    <div
      className="flex w-full px-4 py-4 rounded-md shadow-md lg:w-[30rem]"
      data-testid="cart-item"
    >
      <img
        className="self-start object-contain"
        width="90px"
        src={game.thumb}
        alt={game.title + " Image"}
      />
      <div className="flex flex-col justify-center w-full ml-3">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold sm:text-xl xl:text-[1.35rem]">
            {game.title}
          </p>
        </div>
        <p className="pb-3 text-lg xl:text-xl">${game.normalPrice}</p>
        <div className="flex items-center justify-between w-full mt-2">
          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center w-8 h-8 duration-100 border cursor-pointer rounded-l-md border-[#d2d0d0] hover:bg-primary hover:text-background"
              onClick={handleSubtractButton}
              data-testid="decrease-quantity"
            >
              −
            </button>
            <input
              type="text"
              name="quantity"
              className="flex items-center justify-center w-12 h-8 px-4 border-t border-b cursor-text border-[#d2d0d0] text-center"
              value={game.quantity}
              onChange={handleInput}
              min={1}
              data-testid="quantity-input"
            ></input>
            <button
              className="flex items-center justify-center w-8 h-8 duration-100 border cursor-pointer rounded-r-md border-[#d2d0d0] hover:bg-primary hover:text-background"
              onClick={handleAddButton}
              data-testid="increase-quantity"
            >
              +
            </button>
          </div>
          <button
            className="flex items-center justify-center w-8 h-8 duration-100 border rounded-md cursor-pointer border-[#d2d0d0] text-[red] hover:text-background hover:bg-[red]"
            onClick={handleRemoveItem}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  game: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};
