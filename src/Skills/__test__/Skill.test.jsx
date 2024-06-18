import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Skill from "../Skill";
import { MdDesignServices } from "react-icons/md";

describe("Skill", () => {
  // it("renders the svg component passed to it", () => {
  //     render(<Skill icon={<MdDesignServices />}  title="web design" description="some description" />)
  //     const svg = screen.getByRole("graphics-document");
  //     expect(svg).toBeInTheDocument();
  // })
  it("renders the title of the skill with the text passed to it", () => {
    render(
      <Skill
        icon={<MdDesignServices />}
        title="web design"
        description="some description"
      />,
    );
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/web design/i);
  });
  it("renders a paragraph with the description passed to it", () => {
    render(
      <Skill
        icon={<MdDesignServices />}
        title="web design"
        description="some description"
      />,
    );
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/some description/i);
  });
});
