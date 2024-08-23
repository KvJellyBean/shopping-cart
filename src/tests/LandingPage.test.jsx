import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LandingPage } from "../routes/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Landing Page", () => {
  it("should render the Hero component", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
    const hero = screen.getByTestId("hero");
    expect(hero).toBeInTheDocument();
  });

  it("should render the NewRelease component", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
    const newRelease = screen.getByTestId("new-release");
    expect(newRelease).toBeInTheDocument();
  });

  it("should render the Genre component", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
    const genre = screen.getByTestId("genre");
    expect(genre).toBeInTheDocument();
  });
});
