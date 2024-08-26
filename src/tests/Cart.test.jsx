import { describe, it, expect, vitest, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cart } from "../routes/Cart";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockContext = {
  cart: [],
  setCart: vitest.fn(),
};

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useOutletContext: () => mockContext,
  };
});

describe("Cart Page", () => {
  it("should render the Cart component", () => {
    mockContext.cart = [
      { id: 1, name: "Game 1", price: 50, image: "game1.jpg", quantity: 1 },
    ];
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const cart = screen.getByTestId("cart");
    expect(cart).toBeInTheDocument();
  });

  it("should render the cart items when cart is not empty", () => {
    mockContext.cart = [
      {
        id: 1,
        name: "Game 1",
        price: 50,
        image: "game1.jpg",
        quantity: 1,
      },
      {
        id: 2,
        name: "Game 2",
        price: 60,
        image: "game2.jpg",
        quantity: 1,
      },
    ];
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const cartItems = screen.getAllByTestId("cart-item");
    expect(cartItems).toHaveLength(2);
  });

  it("should render the cart total price when cart is not empty", () => {
    mockContext.cart = [
      {
        id: 1,
        name: "Game 1",
        price: 50,
        image: "game1.jpg",
        quantity: 1,
      },
      {
        id: 2,
        name: "Game 2",
        price: 60,
        image: "game2.jpg",
        quantity: 1,
      },
    ];

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const cartTotal = screen.getByTestId("cart-total");
    expect(cartTotal).toBeInTheDocument();
  });

  it("should increase quantity when clicked", async () => {
    mockContext.cart = [
      {
        id: 1,
        name: "Game 1",
        price: 50,
        image: "game1.jpg",
        quantity: 1,
      },
    ];
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const increaseButton = screen.getByTestId("increase-quantity");
    const inputFieldQty = screen.getByTestId("quantity-input");
    await user.click(increaseButton);

    setInterval(() => {
      expect(inputFieldQty.value).toMatch("2");
    }, 200);
  });

  it("should decrease quantity when clicked", async () => {
    mockContext.cart = [
      {
        id: 1,
        name: "Game 1",
        price: 50,
        image: "game1.jpg",
        quantity: 2,
      },
    ];
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const decreaseButton = screen.getByTestId("decrease-quantity");
    const inputFieldQty = screen.getByTestId("quantity-input");
    await user.click(decreaseButton);

    setInterval(() => {
      expect(inputFieldQty.value).toMatch("1");
    }, 200);
  });

  it("should render the checkout button when cart is not empty", () => {
    const mockCart = [
      {
        id: 1,
        name: "Game 1",
        price: 50,
        image: "game1.jpg",
        quantity: 1,
      },
      {
        id: 2,
        name: "Game 2",
        price: 60,
        image: "game2.jpg",
        quantity: 1,
      },
    ];

    render(
      <BrowserRouter>
        <Cart cart={mockCart} />
      </BrowserRouter>
    );

    const checkoutButton = screen.getByTestId("checkout-button");
    expect(checkoutButton).toBeInTheDocument();
  });

  it("should empty the cart when checkout button is clicked", async () => {
    const mockCart = [
      {
        id: 1,
        name: "Game 1",
        price: 50,
        image: "game1.jpg",
        quantity: 1,
      },
      {
        id: 2,
        name: "Game 2",
        price: 60,
        image: "game2.jpg",
        quantity: 1,
      },
    ];

    render(
      <BrowserRouter>
        <Cart cart={mockCart} />
      </BrowserRouter>
    );

    const checkoutButton = screen.getByTestId("checkout-button");
    await userEvent.click(checkoutButton);

    expect(mockContext.setCart).toHaveBeenCalled;
    expect(mockContext.setCart).toHaveBeenCalledWith([]);
  });

  it("should render the EmptyCart component when cart is empty", () => {
    mockContext.cart = [];

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const emptyCart = screen.getByTestId("empty-cart");
    expect(emptyCart).toBeInTheDocument();
  });
});
