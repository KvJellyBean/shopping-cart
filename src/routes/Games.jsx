import React from "react";
import { ShopCard } from "../components/ShopCard";
import { useOutletContext } from "react-router-dom";

export const Games = () => {
  const { games, cart, setCart } = useOutletContext();

  return (
    <section
      className="flex flex-col items-center justify-start gap-10 py-16 pt-[8.5rem] min-h-[78dvh]"
      data-testid="games"
    >
      <h2 className="text-2xl font-bold font-heading text-primary sm:text-[2rem]">
        Games Center
      </h2>
      <div
        className="flex flex-col flex-wrap justify-center gap-8 px-8 sm:flex-row"
        data-testid="game-list"
      >
        {games.map((game) => {
          return (
            <ShopCard
              key={game.gameID}
              game={game}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </section>
  );
};
