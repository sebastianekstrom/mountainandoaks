import React from "react";
import { render, screen } from "@testing-library/react";
import BaconJam from "pages/food-and-drinks/bacon-jam";

describe("BaconJam page", () => {
  it("renders title correctly", () => {
    render(<BaconJam />);
    const title = screen.queryAllByText(/Bacon jam/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BaconJam />);
    const ingress = screen.queryAllByText(/TODO./i);
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<BaconJam />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
