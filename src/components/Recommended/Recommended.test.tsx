import { render, screen } from "@testing-library/react";
import React from "react";

import { Recommended } from "./Recommended";

describe("Recommended Component", () => {
  it("renders correctly with valid props", () => {
    render(<Recommended title="Check these out!" category="bread" />);

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(3);
  });

  it("returns null of a category isn't passed", () => {
    const { container } = render(
      <Recommended title="Check these out!" category="" />
    );

    expect(container).toBeEmptyDOMElement();
  });
});
