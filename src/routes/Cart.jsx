import React from "react";
import { useOutletContext } from "react-router-dom";
import { CartCard } from "../components/CartCard";
import { EmptyCart } from "../components/EmptyCart";
import { OrderSummary } from "../components/OrderSummary";
import { handleCheckout } from "../utils/Handler";

export const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const tax = 1;
  const subtotal = cart.reduce(
    (acc, item) => acc + item.normalPrice * item.quantity,
    0
  );
  const total = subtotal + tax;

  const handleCheckoutClick = () => {
    handleCheckout(setCart);
  };

  if (cart.length == 0) {
    return <EmptyCart />;
  }

  return (
    <section
      className="flex flex-col items-center justify-start gap-10 py-16 pt-[8.5rem] px-4 min-h-[78dvh]"
      data-testid="cart"
    >
      <h2 className="text-2xl font-bold font-heading text-primary sm:text-[2rem] text-center">
        My Cart
      </h2>

      <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
        <div className="flex flex-col w-full gap-4">
          {cart.map((game) => {
            return <CartCard key={game.gameID} game={game} setCart={setCart} />;
          })}
        </div>

        <OrderSummary
          subtotal={subtotal}
          tax={tax}
          total={total}
          handleCheckout={handleCheckoutClick}
        />
      </div>
    </section>
  );
};
