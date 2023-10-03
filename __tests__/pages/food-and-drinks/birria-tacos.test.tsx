import React from "react";
import { render, screen } from "@testing-library/react";
import BirriaTacos from "pages/food-and-drinks/birria-tacos";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BirriaTacos page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/birria-tacos",
    });
  });

  it("renders title correctly", () => {
    render(<BirriaTacos />);
    const title = screen.queryAllByText(/Birria tacos/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BirriaTacos />);
    const ingress = screen.queryAllByText(
      /These tacos are a standout in the world of Mexican cuisine/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<BirriaTacos />);
    const ingredient = screen.queryAllByText(/Beef stock/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<BirriaTacos />);
    const step = screen.queryAllByText(/De-seed and de-stem the chilis/i);
    expect(step).toBeDefined();
  });
});
