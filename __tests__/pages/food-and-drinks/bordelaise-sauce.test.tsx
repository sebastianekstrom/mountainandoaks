import React from "react";
import { render, screen } from "../../../tooling/tests";
import BordelaiseSauce from "pages/food-and-drinks/bordelaise-sauce";

describe("BordelaiseSauce page", () => {
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
