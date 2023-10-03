import React from "react";
import { render, screen } from "@testing-library/react";
import BasilInfusedOil from "pages/food-and-drinks/basil-infused-oil";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BasilInfusedOil page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/basil-infused-oil",
    });
  });

  it("renders title correctly", () => {
    render(<BasilInfusedOil />);
    const title = screen.queryAllByText(/Basil-infused oil/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BasilInfusedOil />);
    const ingress = screen.queryAllByText(/Elevate your meals with this easy/i);
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<BasilInfusedOil />);
    const ingredient = screen.queryAllByText(/Fresh basil/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<BasilInfusedOil />);
    const step = screen.queryAllByText(/In a mixing container, combine/i);
    expect(step).toBeDefined();
  });
});
