import React from "react";
import { render, screen } from "@testing-library/react";
import BasilInfusedOil from "pages/food-and-drinks/basil-infused-oil";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("DriedCitrus page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/basil-infused-oil",
    });

    render(<BasilInfusedOil />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Basil-infused oil/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(/Elevate your meals with this easy/i);
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const ingredient = screen.queryAllByText(/Fresh basil/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(/In a mixing container, combine/i);
    expect(step).toBeDefined();
  });
});
