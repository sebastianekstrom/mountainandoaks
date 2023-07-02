import React from "react";
import { render, screen } from "@testing-library/react";
import BuffaloChickenWing from "pages/food-and-drinks/buffalo-chicken-wing-sauce";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BuffaloChickenWing page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/buffalo-chicken-wing-sauce",
    });

    render(<BuffaloChickenWing />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Buffalo Chicken Wing Sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(/Get ready to rock your taste buds/i);
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const ingredient = screen.queryAllByText(/Ketchup/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Generously smother your crispy chicken/i
    );
    expect(step).toBeDefined();
  });
});
