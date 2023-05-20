import React from "react";
import { render, screen } from "@testing-library/react";
import Bolognese from "pages/food-and-drinks/bolognese";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("DriedCitrus page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/bolognese",
    });

    render(<Bolognese />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Bolognese/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /There are almost as many Bolognese recipes as there are Italians/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const ingredient = screen.queryAllByText(/Minced beef/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(/Start off with some preparation/i);
    expect(step).toBeDefined();
  });
});
