import type { Meta, StoryObj } from "@storybook/react";

import { Method } from "./Method";

const meta: Meta<typeof Method> = {
  title: "Components/Method",
  component: Method,
};

export default meta;
type Story = StoryObj<typeof Method>;

export const Component: Story = {
  args: {
    recipeMethod: [
      "Mix the ingredients.",
      "Knead the dough.",
      "Let the dough rise.",
    ],
  },
};
