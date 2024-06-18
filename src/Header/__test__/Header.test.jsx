import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { describe, it, expect } from "vitest";

describe("Header", () => {
  it("renders a header element", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
  it("renders a h1 element with the text {john doe}", () => {
    render(<Header />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/{john doe}/i);
  });
  it("renders 4 link elements", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });
  it("renders 'home', 'about', 'skills' and 'my projects' links", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const skillsLink = screen.getByRole("link", { name: /skills/i });
    const myProjectsLink = screen.getByRole("link", { name: /my projects/i });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(myProjectsLink).toBeInTheDocument();
  });
  it("renders a button element with the text content 'my resume'", () => {
    render(<Header />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/my resume/i);
  });
});
