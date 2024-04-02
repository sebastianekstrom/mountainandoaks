import React from "react";
import { render, screen } from "@testing-library/react";
import { IngredientMeta } from "./IngredientMeta";
import { RecipeTimes } from "components/Ingredients/Ingredients";

const defaultProps = {
  onIncrease: jest.fn(),
  onDecrease: jest.fn(),
  multiplier: 1,
  weight: 1000,
  ingredientSuffix: "loaf",
  hydration: 70,
  initialValue: 1,
  excludeWeight: false,
  recipeTimes: {
    prepTimeInMinutes: 30,
    proofTimeInMinutes: 240,
    roomTempTimeInMinutes: 60,
  } as RecipeTimes,
};

describe("IngredientMeta", () => {
  it("renders weight", () => {
    render(<IngredientMeta {...defaultProps} />);
    expect(screen.getByText("Weight")).toBeDefined();
    expect(screen.getByText("1000g")).toBeDefined();
  });
});
