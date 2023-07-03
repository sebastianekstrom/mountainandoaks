import type { Meta, StoryObj } from "@storybook/react";
import { Ingredient } from "types/recipe";
import { Ingredients } from "./Ingredients";
import { RecipeTimes } from "../Ingredients/Ingredients";

const meta: Meta<typeof Ingredients> = {
  title: "Components/Ingredients",
  component: Ingredients,
};

export default meta;
type Story = StoryObj<typeof Ingredients>;

export const Component: Story = {
  args: {
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
  },
};
