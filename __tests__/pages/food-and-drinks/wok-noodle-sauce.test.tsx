import React from "react";
import { render, screen } from "@testing-library/react";
import WokNoodleSauce from "pages/food-and-drinks/wok-noodle-sauce";

describe("WokNoodleSauce page", () => {
  it("renders title correctly", () => {
    render(<WokNoodleSauce />);
    const title = screen.queryAllByText(/Wok Noodle Sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<WokNoodleSauce />);
    const ingress = screen.queryAllByText(
      /A sweet and savory sauce packed with umami—perfect for tossing with noodles, beef, and crisp veggies in a hot wok../i,
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<WokNoodleSauce />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
