import React from "react";
import { render, screen } from "@testing-library/react";
import BordelaiseSauce from "pages/food-and-drinks/bordelaise-sauce";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BordelaiseSauce page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/bordelaise-sauce",
    });
  });

  it("renders title correctly", () => {
    render(<BordelaiseSauce />);
    const title = screen.queryAllByText(/Bordelaise sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BordelaiseSauce />);
    const ingress = screen.queryAllByText(
      /Bordelaise sauce is a classic French sauce named/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<BordelaiseSauce />);
    const ingredient = screen.queryAllByText(/Veel or beef stock/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<BordelaiseSauce />);
    const step = screen.queryAllByText(/Begin by prepping your ingredients/i);
    expect(step).toBeDefined();
  });
});
