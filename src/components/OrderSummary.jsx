import React from "react";
import PropTypes from "prop-types";

export const OrderSummary = ({ subtotal, tax, total, handleCheckout }) => {
  return (
    <div className="px-5 py-8 border shadow-md min-w-[18rem] w-full rounded-md border-[#efefef]">
      <p className="text-xl font-bold text-center xl:text-2xl">Order Summary</p>
      <div className="flex justify-between pt-5 xl:text-lg">
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-5 border-b xl:text-lg">
        <p>Tax</p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div
        className="flex justify-between py-5 font-bold xl:text-lg"
        data-testid="cart-total"
      >
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <button
        className="w-full px-5 py-2 font-bold border-2 rounded-md text-background bg-primary xl:text-lg hover:bg-background hover:text-primary border-primary"
        onClick={handleCheckout}
        data-testid="checkout-button"
      >
        Checkout
      </button>
    </div>
  );
};

OrderSummary.propTypes = {
  subtotal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handleCheckout: PropTypes.func.isRequired,
};
