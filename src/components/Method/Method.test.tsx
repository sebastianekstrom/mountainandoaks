import { render, screen } from "@testing-library/react";
import React from "react";

import { Method, type SingleStepMethod, type MultiStepMethod } from "./Method";

const defaultPropsSingleStep: SingleStepMethod = [
	"Mix the ingredients.",
	"Knead the dough.",
	"Let the dough rise.",
];

const defaultPropsMultiStep: MultiStepMethod[] = [
	{
		label: "Day 1",
		steps: ["Mix the ingredients.", "Knead the dough."],
	},
	{
		label: "Day 2",
		steps: ["Shape the dough.", "Bake the bread."],
	},
];

describe("Method", () => {
	it("renders single step method", () => {
		render(<Method recipeMethod={defaultPropsSingleStep} />);
		expect(screen.getByText("Mix the ingredients.")).toBeDefined();
		expect(screen.getByText("Knead the dough.")).toBeDefined();
		expect(screen.getByText("Let the dough rise.")).toBeDefined();
	});

	it("renders multi-step method", () => {
		render(<Method recipeMethod={defaultPropsMultiStep} />);
		expect(screen.getByText("Day 1")).toBeDefined();
		expect(screen.getByText("Day 2")).toBeDefined();
		expect(screen.getByText("Mix the ingredients.")).toBeDefined();
		expect(screen.getByText("Knead the dough.")).toBeDefined();
		expect(screen.getByText("Shape the dough.")).toBeDefined();
		expect(screen.getByText("Bake the bread.")).toBeDefined();
	});
});
