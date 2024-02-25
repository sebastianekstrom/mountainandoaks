import React from "react";
import { render, screen } from "../../../tooling/tests";
import RasberryFudge from "pages/food-and-drinks/rasberry-fudge";

describe("RasberryFudge page", () => {
  it("renders title correctly", () => {
    render(<RasberryFudge />);
    const title = screen.queryAllByText(/Rasberry fudge/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<RasberryFudge />);
    const ingress = screen.queryAllByText(/A refreshing cocktail inspired by/i);
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<RasberryFudge />);
    const ingredient = screen.queryAllByText(/Vanilla vodka/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<RasberryFudge />);
    const step = screen.queryAllByText(
      /Combine all ingredients in a shaker filled/i
    );
    expect(step).toBeDefined();
  });
});
