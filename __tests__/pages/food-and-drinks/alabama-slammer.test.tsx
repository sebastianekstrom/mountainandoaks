import React from "react";
import { render, screen } from "../../../tooling/tests";
import AlabamaSlammer from "pages/food-and-drinks/alabama-slammer";

describe("AlabamaSlammer page", () => {
  it("renders title correctly", () => {
    render(<AlabamaSlammer />);
    const title = screen.queryAllByText(/Alabama Slammer/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<AlabamaSlammer />);
    const ingress = screen.queryAllByText(
      /Meet the Alabama Slammer, a refreshing cocktail with a sports twist!/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<AlabamaSlammer />);
    const ingredient = screen.queryAllByText(/Orange juice/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<AlabamaSlammer />);
    const step = screen.queryAllByText(/Combine all ingredients/i);
    expect(step).toBeDefined();
  });
});
