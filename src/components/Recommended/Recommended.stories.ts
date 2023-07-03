import type { Meta, StoryObj } from "@storybook/react";

import { Recommended } from "./Recommended";

const meta: Meta<typeof Recommended> = {
  title: "Components/Recommended",
  component: Recommended,
};

export default meta;
type Story = StoryObj<typeof Recommended>;

export const Component: Story = {
  args: {
    category: "pizza",
    title: "More pizza recipes",
  },
};
