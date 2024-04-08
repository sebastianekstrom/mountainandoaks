import { Text } from "components/Text/Text";

import { getRecipeMethodType } from "./getRecipeMethodType";

const MULTI_STEP = [
	{
		label: "1. Do this",
		steps: ["foo", "bar", "baz"],
	},
	{
		label: "2. And then do this",
		steps: ["foo", "bar", "baz"],
	},
];

const SINGLE_STEP = ["Do this", "And then this"];
const SINGLE_STEP_WITH_REACT = [
	<Text key="1">Do this</Text>,
	<Text key="2">And then this</Text>,
];

describe("getRecipeMethodType", () => {
	it("returns 'multi-step' if the method has multiple steps", () => {
		expect(getRecipeMethodType(MULTI_STEP)).toBe("multi-step");
	});

	it("returns 'single-step' if the method has multiple steps", () => {
		expect(getRecipeMethodType(SINGLE_STEP)).toBe("single-step");
	});

	it("returns 'single-step' if the method has multiple steps with React components", () => {
		expect(getRecipeMethodType(SINGLE_STEP_WITH_REACT)).toBe("single-step");
	});
});
