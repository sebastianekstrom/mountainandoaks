import React from "react";
import { render, screen } from "@testing-library/react";
import GarlicOil from "pages/food-and-drinks/garlic-oil";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("GarlicOil page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/garlic-oil",
    });
  });

  it("renders title correctly", () => {
    render(<GarlicOil />);
    const title = screen.queryAllByText(/Garlic oil/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<GarlicOil />);
    const ingress = screen.queryAllByText(
      /This garlic infused oil is perfect/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<GarlicOil />);
    const flourLabel = screen.queryAllByText(/Cloves of garlic/i);
    expect(flourLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<GarlicOil />);
    const step = screen.queryAllByText(/Peel the garlic and crush the cloves/i);
    expect(step).toBeDefined();
  });
});
