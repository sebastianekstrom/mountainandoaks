import React from "react";
import { render, screen } from "@testing-library/react";
import Bolognese from "pages/food-and-drinks/bolognese";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Bolognese page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/bolognese",
    });
  });

  it("renders title correctly", () => {
    render(<Bolognese />);
    const title = screen.queryAllByText(/Bolognese/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Bolognese />);
    const ingress = screen.queryAllByText(
      /There are almost as many Bolognese recipes as there are Italians/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<Bolognese />);
    const ingredient = screen.queryAllByText(/Minced beef/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<Bolognese />);
    const step = screen.queryAllByText(/Start off with some preparation/i);
    expect(step).toBeDefined();
  });
});
