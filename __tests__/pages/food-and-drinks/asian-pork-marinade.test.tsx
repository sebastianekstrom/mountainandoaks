import { render, screen } from "@testing-library/react";
import React from "react";

import AsianPorkMarinade from "pages/food-and-drinks/asian-pork-marinade";

describe("AsianPorkMarinade page", () => {
  it("renders title correctly", () => {
    render(<AsianPorkMarinade />);
    const title = screen.queryAllByText(/Asian pork marinade/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<AsianPorkMarinade />);
    const ingress = screen.queryAllByText(
      /Elevate your pork dishes with this rich, Vietnamese-inspired marinade. Perfect for grilling, roasting, or pan-frying pork to perfection../i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<AsianPorkMarinade />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
