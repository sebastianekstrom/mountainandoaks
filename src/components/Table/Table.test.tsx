import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Table } from "./Table";
import { Ingredient } from "types/recipe";

const defaultProps: Ingredient[] = [
  {
    value: 100,
    label: "Flour",
    valueSuffix: "g",
    isFlour: true,
  },
  {
    value: 60,
    label: "Water",
    valueSuffix: "g",
    isWater: true,
  },
];

describe("Table", () => {
  it("renders the table with the correct items and values", () => {
    render(<Table items={defaultProps} multiplier={1} />);
    expect(screen.getByText("Flour")).toBeDefined();
    expect(screen.getByText("Water")).toBeDefined();
    expect(screen.getByText("100g")).toBeDefined();
    expect(screen.getByText("60g")).toBeDefined();
  });

  it("adjusts the values based on the multiplier", () => {
    render(<Table items={defaultProps} multiplier={2} />);
    expect(screen.getByText("200g")).toBeDefined();
    expect(screen.getByText("120g")).toBeDefined();
  });

  it("toggles bakers percentage display", () => {
    render(<Table items={defaultProps} multiplier={1} />);
    const toggleButton = screen.getByText("Show bakers %");
    fireEvent.click(toggleButton);

    expect(screen.getByText("(100%)")).toBeDefined();
    expect(screen.getByText("(60%)")).toBeDefined();

    fireEvent.click(toggleButton);
    expect(screen.queryByText("(100%)")).toBe(null);
    expect(screen.queryByText("(60%)")).toBe(null);
  });
});
