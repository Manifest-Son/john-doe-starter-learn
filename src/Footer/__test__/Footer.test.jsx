import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders a footer html element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
  it("renders a paragraph and two link elements", () => {
    render(<Footer />);
    const paragraph = screen.getByRole("paragraph");
    const links = screen.getAllByRole("link");
    expect(paragraph).toBeInTheDocument();
    expect(links).toHaveLength(2);
    links.forEach((link) => expect(link).toBeInTheDocument());
  });
  it("uses the correct github url in the name link", () => {
    render(<Footer />);
    const ghLink = screen.getByRole("link", { name: /dennis otwoma/i });
    expect(ghLink).toHaveAttribute("href", "https://github.com/codeme254");
  });
  it("uses the correct linkedin url in the linkedin link", () => {
    render(<Footer />);
    const lnLink = screen.getByRole("link", { name: /linkedin/i });
    expect(lnLink).toHaveAttribute("href", "https://linkedin.com/in/otwoma");
  });
});
