import React from "react";
import { render, screen } from "@testing-library/react";
import LandSour from "pages/food-and-drinks/aland-sour";

describe("AlandSour page", () => {
  it("renders title correctly", () => {
    render(<LandSour />);
    const title = screen.queryAllByText(/Åland Sour/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<LandSour />);
    const ingress = screen.queryAllByText(
      /A refreshing gin cocktail where the crisp flavor of fresh pressed apple takes the lead, rounded out with bright citrus and a touch of elderflower sweetness../i,
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<LandSour />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
