import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Project from "../Project";

describe("Project", () => {
  const renderComponent = () => {
    render(
      <Project
        thumbnail="source.jpg"
        title="zaph tours"
        excerpt="a project I built"
        liveUrl="https://github.com/codeme254"
        codeUrl="https://github.com"
      />,
    );
  };
  it("renders the image component with the correct source attribute", () => {
    renderComponent();
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "source.jpg");
  });
  it("renders two heading elements with the same title", () => {
    renderComponent();
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(2);
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/zaph tours/i);
    });
  });
  it("renders a pagragraph element with the description passed in", () => {
    renderComponent();
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/a project i built/i);
  });
  it("renders the live link with the correct url passed", () => {
    renderComponent();
    const link = screen.getByRole("link", { name: /live url/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/codeme254");
  });
  it("renders the code link with the correct url passed", () => {
    renderComponent();
    const link = screen.getByRole("link", { name: /code url/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com");
  });
});
