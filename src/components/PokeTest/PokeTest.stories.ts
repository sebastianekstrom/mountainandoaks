import type { Meta, StoryObj } from "@storybook/react";

import { PokeTest } from "./PokeTest";

const meta: Meta<typeof PokeTest> = {
	title: "Components/PokeTest",
	component: PokeTest,
};

export default meta;
type Story = StoryObj<typeof PokeTest>;

export const Component: Story = {};
