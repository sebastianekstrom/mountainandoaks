import React from "react";
import { render, screen } from "@testing-library/react";
import CheddarDip from "pages/food-and-drinks/cheddar-dip";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("CheddarDip page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/cheddar-dip",
    });
  });

  it("renders title correctly", () => {
    render(<CheddarDip />);
    const title = screen.queryAllByText(/Cheddar dip/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<CheddarDip />);
    const ingress = screen.queryAllByText(/This cheddar dip employs/i);
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<CheddarDip />);
    const ingredient = screen.queryAllByText(/Cheddar/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<CheddarDip />);
    const step = screen.queryAllByText(/Start by prepping the ingredients/i);
    expect(step).toBeDefined();
  });
});
