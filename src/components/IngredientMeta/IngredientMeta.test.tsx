import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";

import type { RecipeTimes } from "components/Ingredients/Ingredients";

import { IngredientMeta } from "./IngredientMeta";

const defaultProps = {
  onIncrease: vi.fn(),
  onDecrease: vi.fn(),
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
