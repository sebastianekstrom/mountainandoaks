import React from "react";
import { render, screen } from "@testing-library/react";
import BurgerSauce from "pages/food-and-drinks/burger-sauce";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("DriedCitrus page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/burger-sauce",
    });

    render(<BurgerSauce />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/The Burger Sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /A delicious mix of creamy mayo, spicy sriracha, tangy garlic pickles/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const ingredient = screen.queryAllByText(/Mayonnaise/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Finely chop onion and pickles, then place in a mixing/i
    );
    expect(step).toBeDefined();
  });
});
