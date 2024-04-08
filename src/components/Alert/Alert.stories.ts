import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
	title: "Components/Alert",
	component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Component: Story = {
	args: {
		title: "Tip!",
		description:
			"The dough is ready when it passes the windowpane test. Wet your hands, take a piece of dough, and gently stretch it.",
	},
};
