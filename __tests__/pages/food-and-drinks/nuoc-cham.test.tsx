import React from "react";
import { render, screen } from "@testing-library/react";
import NuocCham from "pages/food-and-drinks/nuoc-cham";

describe("NuocCham page", () => {
  it("renders title correctly", () => {
    render(<NuocCham />);
    const title = screen.queryAllByText(/Nuoc Cham/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<NuocCham />);
    const ingress = screen.queryAllByText(
      /A bold and balanced Vietnamese dipping sauce/i,
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<NuocCham />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
