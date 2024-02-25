import React from "react";
import { render, screen } from "../../../tooling/tests";
import SwedishKebabSauce from "pages/food-and-drinks/swedish-kebab-sauce";

describe("SwedishKebabSauce page", () => {
  it("renders title correctly", () => {
    render(<SwedishKebabSauce />);
    const title = screen.queryAllByText(/Swedish kebab sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<SwedishKebabSauce />);
    const ingress = screen.queryAllByText(
      /I've finally managed to recreate the kebab sauce that's used/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<SwedishKebabSauce />);
    const flourLabel = screen.queryAllByText(/Fanta/i);
    const waterLabel = screen.queryAllByText(/Mayonnaise/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<SwedishKebabSauce />);
    const step = screen.queryAllByText(
      /Add all the ingredients in a container/i
    );
    expect(step).toBeDefined();
  });
});
