import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

const meta: Meta<typeof Table> = {
	title: "Components/Table",
	component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Component: Story = {
	args: {
		multiplier: 1,
		items: [
			{
				value: 100,
				label: "Flour",
				valueSuffix: "g",
				isFlour: true,
			},
			{
				value: 60,
				label: "Water",
				valueSuffix: "g",
				isWater: true,
			},
		],
	},
};
