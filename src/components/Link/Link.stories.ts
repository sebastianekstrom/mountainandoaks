import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Component: Story = {
  args: {
    href: "https://sebbebakes.com",
    children: "Sebbe Bakes",
  },
};
