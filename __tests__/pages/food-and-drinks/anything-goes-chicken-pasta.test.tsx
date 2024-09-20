import React from "react";
import { render, screen } from "@testing-library/react";
import AnythingGoesChickenPasta from "pages/food-and-drinks/anything-goes-chicken-pasta";

describe("AnythingGoesChickenPasta page", () => {
  it("renders title correctly", () => {
    render(<AnythingGoesChickenPasta />);
    const title = screen.queryAllByText(/Anything-goes chicken pasta/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<AnythingGoesChickenPasta />);
    const ingress = screen.queryAllByText(
      /This dish was born from a fridge-cleaning session./i,
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<AnythingGoesChickenPasta />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
