import type { Meta, StoryObj } from "@storybook/react";

import { WindowPaneTest } from "./WindowPaneTest";

const meta: Meta<typeof WindowPaneTest> = {
  title: "Components/WindowPaneTest",
  component: WindowPaneTest,
};

export default meta;
type Story = StoryObj<typeof WindowPaneTest>;

export const Component: Story = {};
