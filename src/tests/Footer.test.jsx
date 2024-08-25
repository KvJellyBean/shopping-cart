import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer Component", () => {
  it("should render the Footer component", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should render the logo", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const logo = screen.getByTestId("footer-logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render the contact", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const contact = screen.getByTestId("footer-contact");
    expect(contact).toBeInTheDocument();
  });

  it("should render the navigation links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const nav = screen.getByTestId("footer-nav");
    expect(nav).toBeInTheDocument();
  });

  it("should render the credit", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const credit = screen.getByTestId("footer-credit");
    expect(credit).toBeInTheDocument();
  });
});
