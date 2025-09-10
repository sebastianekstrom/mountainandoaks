import React from "react";
import { render, screen } from "@testing-library/react";
import BasicPicklingLiquid from "pages/food-and-drinks/basic-pickling-liquid";

describe("BasicPicklingLiquid page", () => {
  it("renders title correctly", () => {
    render(<BasicPicklingLiquid />);
    const title = screen.queryAllByText(/Basic pickling liquid/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BasicPicklingLiquid />);
    const ingress = screen.queryAllByText(
      /A quick, flexible pickling base that’s easy to make and can be scaled for any amount of vegetables../i,
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<BasicPicklingLiquid />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
