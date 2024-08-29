import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { GameDetail } from "../routes/GameDetail";
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

const mockParams = {
  gameID: "1",
};

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useOutletContext: () => mockOutletContext,
    useParams: () => mockParams,
  };
});

describe("GameDetail Page", () => {
  it("should render the GameDetail component", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const gameDetail = screen.getByTestId("game-detail");
    expect(gameDetail).toBeInTheDocument();
  });

  it("should render the game image", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const gameImage = screen.getByTestId("game-image");
    expect(gameImage).toBeInTheDocument();
  });

  it("should render the game title", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const gameTitle = screen.getByTestId("game-title");
    expect(gameTitle).toBeInTheDocument();
  });

  it("should render the game description", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const gameDescription = screen.getByTestId("game-description");
    expect(gameDescription).toBeInTheDocument();
  });

  it("should render the game rating", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const gameRating = screen.getByTestId("game-rating");
    expect(gameRating).toBeInTheDocument();
  });

  it("should render the quantity input", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const quantityInput = screen.getByTestId("quantity-input");
    expect(quantityInput).toBeInTheDocument();
  });

  it("should render the normal price", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const normalPrice = screen.getByTestId("normal-price");
    expect(normalPrice).toBeInTheDocument();
  });

  it("should render the add button", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const addButton = screen.getByTestId("add-button");
    expect(addButton).toBeInTheDocument();
  });

  it("should render the subtract button", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const subtractButton = screen.getByTestId("subtract-button");
    expect(subtractButton).toBeInTheDocument();
  });

  it("should render the add to cart button", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const checkoutButton = screen.getByTestId("add-to-cart-button");
    expect(checkoutButton).toBeInTheDocument();
  });

  it("should render the go back button", () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );
    const checkoutButton = screen.getByTestId("go-back-button");
    expect(checkoutButton).toBeInTheDocument();
  });

  it("should increase quantity when add button is clicked", async () => {
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );

    const addButton = screen.getByTestId("add-button");
    const quantityInput = screen.getByTestId("quantity-input");
    userEvent.click(addButton);

    setInterval(() => {
      expect(quantityInput.value).toMatch("2");
    }, 200);
  });

  it("should decrease quantity when subtract button is clicked", async () => {
    mockOutletContext.games[0].quantity = 3;
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );

    const subtractButton = screen.getByTestId("subtract-button");
    const quantityInput = screen.getByTestId("quantity-input");
    userEvent.click(subtractButton);

    setInterval(() => {
      expect(quantityInput.value).toMatch("2");
    }, 200);
  });

  it("should not decrease quantity when quantity is 1", async () => {
    mockOutletContext.games[0].quantity = 1;
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );

    const subtractButton = screen.getByTestId("subtract-button");
    const quantityInput = screen.getByTestId("quantity-input");
    userEvent.click(subtractButton);

    setInterval(() => {
      expect(quantityInput.value).toMatch("1");
    }, 200);
  });

  it("should add the game to the cart when add to cart button is clicked", async () => {
    const setCart = vi.fn();
    mockOutletContext.setCart = setCart;
    render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>
    );

    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await userEvent.click(addToCartButton);

    expect(setCart).toHaveBeenCalled();
  });
});
