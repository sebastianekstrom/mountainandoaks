import React from "react";
import { render, screen } from "@testing-library/react";
import Puttanesca from "pages/food-and-drinks/puttanesca";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Puttanesca page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/puttanesca",
    });
  });

  it("renders title correctly", () => {
    render(<Puttanesca />);
    const title = screen.queryAllByText(/Pasta alla puttanesca/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Puttanesca />);
    const ingress = screen.queryAllByText(
      /Pasta alla puttanesca is a rustic, hearty dish from southern/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<Puttanesca />);
    const ingredient = screen.queryAllByText(/Canned whole tomatoes/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<Puttanesca />);
    const step = screen.queryAllByText(/Begin by prepping your ingredients/i);
    expect(step).toBeDefined();
  });
});
