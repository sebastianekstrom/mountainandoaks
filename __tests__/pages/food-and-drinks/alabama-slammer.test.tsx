import React from "react";
import { render, screen } from "@testing-library/react";
import AlabamaSlammer from "pages/food-and-drinks/alabama-slammer";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("AlabamaSlammer page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/alabama-slammer",
    });

    render(<AlabamaSlammer />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Alabama Slammer/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /Meet the Alabama Slammer, a refreshing cocktail with a sports twist!/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const ingredient = screen.queryAllByText(/Orange juice/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(/Combine all ingredients/i);
    expect(step).toBeDefined();
  });
});
