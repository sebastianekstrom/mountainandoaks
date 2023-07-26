import React from "react";
import { render, screen } from "@testing-library/react";
import BirriaTacos from "pages/food-and-drinks/birria-tacos";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BirriaTacos page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/birria-tacos",
    });

    render(<BirriaTacos />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Birria tacos/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /These tacos are a standout in the world of Mexican cuisine/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const ingredient = screen.queryAllByText(/Beef stock/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(/De-seed and de-stem the chilis/i);
    expect(step).toBeDefined();
  });
});
