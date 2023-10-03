import React from "react";
import { render, screen } from "@testing-library/react";
import JalapenoDip from "pages/food-and-drinks/jalapeno-dip";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("JalapenoDip page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/jalapeno-dip",
    });
  });

  it("renders title correctly", () => {
    render(<JalapenoDip />);
    const title = screen.queryAllByText(/Jalapeño dip/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<JalapenoDip />);
    const ingress = screen.queryAllByText(
      /This dip, with its zesty jalapeño and hint of garlic/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<JalapenoDip />);
    const ingredient = screen.queryAllByText(/Mayonnaise/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<JalapenoDip />);
    const step = screen.queryAllByText(
      /Start by prepping all the ingredients/i
    );
    expect(step).toBeDefined();
  });
});
