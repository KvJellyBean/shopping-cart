import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Mock AppContext
const mockContext = {
  games: [],
  cart: [],
  setCart: vitest.fn(),
};

describe("Header Component", () => {
  it("should render the Header component", () => {
    render(
      <BrowserRouter>
        <Header cart={mockContext.cart} />
      </BrowserRouter>
    );

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should render the logo", () => {
    render(
      <BrowserRouter>
        <Header cart={mockContext.cart} />
      </BrowserRouter>
    );

    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    render(
      <BrowserRouter>
        <Header cart={mockContext.cart} />
      </BrowserRouter>
    );

    const homeLink = screen.getByText("Home");
    const gamesLink = screen.getByText("Games");
    const aboutLink = screen.getByText("About Us");
    const cartLink = screen.getByText("My Cart");

    expect(homeLink).toBeInTheDocument();
    expect(gamesLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });

  it("should render the Header component with cart length 0 when cart is empty", () => {
    render(
      <BrowserRouter>
        <Header cart={mockContext.cart} />
      </BrowserRouter>
    );

    const cartLengthElement = screen.getByText("0");
    expect(cartLengthElement).toBeInTheDocument();
  });

  it("should render the Header component with correct cart length when cart has items", () => {
    const mockCart = [
      { id: 1, quantity: 3 },
      { id: 2, quantity: 2 },
    ];
    render(
      <BrowserRouter>
        <Header cart={mockCart} />
      </BrowserRouter>
    );

    const cartLengthElement = screen.getByText("5");
    expect(cartLengthElement).toBeInTheDocument();
  });
});
