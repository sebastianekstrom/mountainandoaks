import React from "react";
import { render, screen } from "@testing-library/react";
import { Ingredient, MultiIngredient } from "types/recipe";
import { Ingredients, RecipeTimes } from "./Ingredients";

const defaultProps = {
  ingredients: [
    {
      value: 1000,
      label: "Flour",
      isFlour: true,
    },
    {
      value: 700,
      label: "Water",
      isWater: true,
    },
  ] as Ingredient[],
  ingredientSuffix: "loaf",
  initialValue: 1,
  excludeWeight: false,
  recipeTimes: {
    prepTimeInMinutes: 30,
    proofTimeInMinutes: 240,
    roomTempTimeInMinutes: 60,
  } as RecipeTimes,
};

const defaultPropsMultiIngredient = {
  ingredients: [
    {
      label: "Section 1",
      ingredients: [
        {
          value: 1000,
          label: "Flour",
          isFlour: true,
        },
        {
          value: 700,
          label: "Water",
          isWater: true,
        },
      ],
    },
    {
      label: "Section 2",
      ingredients: [
        {
          value: 200,
          label: "Salt",
        },
        {
          value: 50,
          label: "Yeast",
        },
      ],
    },
  ] as MultiIngredient[],
  ingredientSuffix: "loaf",
  initialValue: 1,
  excludeWeight: false,
  recipeTimes: {
    prepTimeInMinutes: 30,
    proofTimeInMinutes: 240,
    roomTempTimeInMinutes: 60,
  } as RecipeTimes,
};

describe("Ingredients", () => {
  it("renders single ingredient list", () => {
    render(<Ingredients {...defaultProps} />);
    expect(screen.getByText("Flour")).toBeDefined();
    expect(screen.getByText("Water")).toBeDefined();
  });

  it("renders multi-ingredient list", () => {
    render(<Ingredients {...defaultPropsMultiIngredient} />);
    expect(screen.getByText("Section 1")).toBeDefined();
    expect(screen.getByText("Section 2")).toBeDefined();
    expect(screen.getByText("Flour")).toBeDefined();
    expect(screen.getByText("Water")).toBeDefined();
    expect(screen.getByText("Salt")).toBeDefined();
    expect(screen.getByText("Yeast")).toBeDefined();
  });
});
