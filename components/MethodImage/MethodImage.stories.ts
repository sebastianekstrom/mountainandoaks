import type { Meta, StoryObj } from "@storybook/react";

import { MethodImage } from "./MethodImage";

const meta: Meta<typeof MethodImage> = {
  title: "Components/MethodImage",
  component: MethodImage,
};

export default meta;
type Story = StoryObj<typeof MethodImage>;

export const Component: Story = {
  args: {
    src: require("../../public/images/pizza/ny-style/thumbnails/wide.jpg"),
    alt: "pizza",
  },
};
