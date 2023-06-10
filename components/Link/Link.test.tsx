import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Link } from "./Link";

describe("Link component", () => {
  it("renders with children", () => {
    render(<Link href="/test">Test Link</Link>);
    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toBeDefined();
  });

  it("renders with href", () => {
    render(<Link href="/test">Test Link</Link>);
    const linkElement = screen.getByText("Test Link");
    expect(linkElement.closest("a")).toHaveAttribute("href", "/test");
  });

  it("renders with noColor", () => {
    render(
      <Link href="/test" noColor={true}>
        Test Link
      </Link>
    );
    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toHaveClass("font-regular");
  });

  it("renders with underline", () => {
    render(
      <Link href="/test" underline={true}>
        Test Link
      </Link>
    );
    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toHaveClass("underline");
  });
});
