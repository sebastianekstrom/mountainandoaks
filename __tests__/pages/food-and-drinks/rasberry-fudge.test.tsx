import React from "react";
import { render, screen } from "@testing-library/react";
import RasberryFudge from "pages/food-and-drinks/rasberry-fudge";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("DriedCitrus page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/rasberry-fudge",
    });

    render(<RasberryFudge />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Rasberry fudge/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(/A refreshing cocktail inspired by/i);
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const ingredient = screen.queryAllByText(/Vanilla vodka/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Combine all ingredients in a shaker filled/i
    );
    expect(step).toBeDefined();
  });
});
