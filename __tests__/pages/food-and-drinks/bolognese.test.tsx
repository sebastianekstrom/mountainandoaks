import React from "react";
import { render, screen } from "../../../tooling/tests";
import Bolognese from "pages/food-and-drinks/bolognese";

describe("Bolognese page", () => {
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
