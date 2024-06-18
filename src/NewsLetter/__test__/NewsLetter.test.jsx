import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import NewsLetter from "../NewsLetter";

describe("NewsLetter", () => {
  it("renders an email input, a checkbox with its label and a submit button", () => {
    render(<NewsLetter />);
    const emailInput = screen.getByRole("textbox");
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");
    expect(emailInput).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it("renders the 'join newsletter' button in a disabled state by default", () => {
    render(<NewsLetter />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
  it("enables the 'join newsletter' butto-n when the email is filled and user agrees to terms and conditions", async () => {
    const user = userEvent.setup();
    render(<NewsLetter />);
    const emailInput = screen.getByRole("textbox");
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");
    await user.click(emailInput);
    await user.keyboard("email@gmail.com");
    await user.click(checkbox);
    expect(button).toBeEnabled();
  });
});
