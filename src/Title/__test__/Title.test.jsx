import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Title from "../Title";

describe("Title", () => {
  it("renders a heading element with the text passed into it", () => {
    render(<Title text="my heading" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/my heading/i);
  });
});
