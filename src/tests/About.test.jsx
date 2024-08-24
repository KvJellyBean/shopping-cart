import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "../routes/About";

describe("About Page", () => {
  it("should render the About component", () => {
    render(<About />);
    const about = screen.getByTestId("about");
    expect(about).toBeInTheDocument();
  });

  it("should render the image", () => {
    render(<About />);
    const image = screen.getByTestId("about-image");
    expect(image).toBeInTheDocument();
  });
});
