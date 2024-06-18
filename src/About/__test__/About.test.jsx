import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../About";

describe("About", () => {
  it("renders a paragraph component with john doe's about", () => {
    render(<About />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
  it("renders the image of john doe", () => {
    render(<About />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
