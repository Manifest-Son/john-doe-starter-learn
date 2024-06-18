import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

describe("Contact", () => {
  it("closes the privacy notification when the destroy button is clicked", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    const button = screen.getByTitle(/close notification/i);
    const privacyElement = screen.getByTestId("privacy");
    await user.click(button);
    expect(privacyElement).toHaveClass("contact-form__message--closed");
  });
  it("renders a name, email, subject and message inputs", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/full name eg john doe/i);
    const emailInput = screen.getByPlaceholderText(
      /email address eg johndoe@gmail.com/i,
    );
    const subjectInput = screen.getByPlaceholderText(
      /subject eg hey let's talk/i,
    );
    const messageInput = screen.getByPlaceholderText(/message/i);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it("renders the submit button in a disabled state by default", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeDisabled();
  });
  it("enables the submit button when the entire form has been filled", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const subject = screen.getByLabelText(/subject/i);
    const message = screen.getByLabelText(/message/i);
    const button = screen.getByRole("button", { name: /submit/i });

    await user.click(name);
    await user.keyboard("julius");

    await user.click(email);
    await user.keyboard("julius@gmail.com");

    await user.click(subject);
    await user.keyboard("hello there");

    await user.click(message);
    await user.keyboard("I would like to enroll");

    expect(button).toBeEnabled();
  });
  it("clears the form and disables the button on form submission", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/full name eg john doe/i);
    const emailInput = screen.getByPlaceholderText(
      /email address eg johndoe@gmail.com/i,
    );
    const subjectInput = screen.getByPlaceholderText(
      /subject eg hey let's talk/i,
    );
    const messageInput = screen.getByPlaceholderText(/message/i);
    const button = screen.getByRole("button", { name: /submit/i });

    await user.click(nameInput);
    await user.keyboard("julius");

    await user.click(emailInput);
    await user.keyboard("julius@gmail.com");

    await user.click(subjectInput);
    await user.keyboard("hey there");

    await user.click(messageInput);
    await user.keyboard("hey, I would like to enroll");

    await user.click(button);

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(subjectInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
    expect(button).toBeDisabled();
  });
});
