import React from "react";
import { render, screen } from "@testing-library/react";
import JalapenoDip from "pages/food-and-drinks/jalapeno-dip";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("JalapenoDip page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/jalapeno-dip",
    });

    render(<JalapenoDip />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Jalapeño dip/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /This dip, with its zesty jalapeño and hint of garlic/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const ingredient = screen.queryAllByText(/Mayonnaise/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Start by prepping all the ingredients/i
    );
    expect(step).toBeDefined();
  });
});
