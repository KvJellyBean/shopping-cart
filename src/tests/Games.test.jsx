import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Games } from "../routes/Games";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockOutletContext = {
  games: [
    {
      gameID: "1",
      title: "Game Title",
      thumb: "https://via.placeholder.com/150",
      description: "Game Description",
      rating: 4.5,
    },
  ],
  setCart: () => {},
};

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useOutletContext: () => mockOutletContext,
  };
});

describe("Games Page", () => {
  it("should render the Games component", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const games = screen.getByTestId("games");
    expect(games).toBeInTheDocument();
  });

  it("should render the game list", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const gameList = screen.getByTestId("game-list");
    expect(gameList).toBeInTheDocument();
  });

  it("should render the game item", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const gameItem = screen.getAllByTestId("game-item");
    expect(gameItem).toHaveLength(1);
  });

  it("should render the game image", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const gameImage = screen.getByTestId("game-image");
    expect(gameImage).toBeInTheDocument();
  });

  it("should render the game title", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const gameTitle = screen.getByTestId("game-title");
    expect(gameTitle).toBeInTheDocument();
  });

  it("should render the quantity input", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const quantityInput = screen.getByTestId("quantity-input");
    expect(quantityInput).toBeInTheDocument();
  });

  it("should render the add button", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const addButton = screen.getByTestId("add-button");
    expect(addButton).toBeInTheDocument();
  });

  it("should render the subtract button", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const subtractButton = screen.getByTestId("subtract-button");
    expect(subtractButton).toBeInTheDocument();
  });

  it("should increase quantity when clicked", async () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );

    const addButton = screen.getByTestId("add-button");
    const quantityInput = screen.getByTestId("quantity-input");
    quantityInput.value = "1";

    await userEvent.click(addButton);
    setInterval(() => {
      expect(quantityInput.value).toMatch("2");
    }, 200);
  });

  it("should decrease quantity when clicked", async () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );

    const subtractButton = screen.getByTestId("subtract-button");
    const quantityInput = screen.getByTestId("quantity-input");
    quantityInput.value = "3";

    await userEvent.click(subtractButton);
    setInterval(() => {
      expect(quantityInput.value).toMatch("2");
    }, 200);
  });

  it("should render the add to cart button", () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const addToCart = screen.getByTestId("add-to-cart-button");
    expect(addToCart).toBeInTheDocument();
  });

  it("should add game to cart when add to cart button is clicked", async () => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
    const addToCart = screen.getByTestId("add-to-cart-button");
    await userEvent.click(addToCart);
    setInterval(() => {
      expect(mockOutletContext.setCart).toHaveBeenCalled();
    }, 200);
  });
});
