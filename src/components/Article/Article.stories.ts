import type { Meta, StoryObj } from "@storybook/react";

import { Article } from "./Article";
import { CATEGORIES } from "../../constants/recipes";

const meta: Meta<typeof Article> = {
	title: "Components/Article",
	component: Article,
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Component: Story = {
	args: {
		type: "featured",
		recipe: {
			title: "New York style pizza dough",
			url: "/pizza/new-york-style",
			category: CATEGORIES.pizza,
			thumbnails: {
				hero: require("../../public/images/pizza/ny-style/thumbnails/hero.jpg"),
				tall: require("../../public/images/pizza/ny-style/thumbnails/tall.jpg"),
				wide: require("../../public/images/pizza/ny-style/thumbnails/wide.jpg"),
				square: require("../../public/images/pizza/ny-style/thumbnails/square.jpg"),
				meta: require("../../public/images/pizza/ny-style/thumbnails/meta.png"),
			},
			description:
				"The classic New York style pizza has a crispy crust and very thin bottom. A touch of sugar adds a bit of sweetness to it compared to the Neapolitan or Roman ones and the olive oil gives the crust a real nice color and texture. The dough is quite forgiving and it’s optimal for baking in your home oven. This dough pairs very well with my New York Style pizza sauce, and for instructions on how to bake it please see my guide on how to bake pizza in a home oven. For optimal flavor I recommend cold proofing the dough in the fridge for at least 24 hours!",
		},
	},
};
