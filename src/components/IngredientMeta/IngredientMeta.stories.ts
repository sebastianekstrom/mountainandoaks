import type { Meta, StoryObj } from "@storybook/react";

import { IngredientMeta } from "./IngredientMeta";
import { RecipeTimes } from "components/Ingredients/Ingredients";

const meta: Meta<typeof IngredientMeta> = {
  title: "Components/IngredientMeta",
  component: IngredientMeta,
};

export default meta;
type Story = StoryObj<typeof IngredientMeta>;

export const Component: Story = {
  args: {
    weight: 182,
    hydration: 41,
    excludeWeight: false,
    recipeTimes: {
      prepTimeInMinutes: 30,
      proofTimeInMinutes: 240,
      roomTempTimeInMinutes: 60,
    } as RecipeTimes,
  },
};
