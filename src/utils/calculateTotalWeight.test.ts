import type { Ingredient, MultiIngredient } from "types/recipe";

import { calculateTotalWeight } from "./calculateTotalWeight";

describe("calculateTotalWeight", () => {
	const ingredientA: Ingredient = {
		value: 100,
		label: "Ingredient A",
	};

	const ingredientB: Ingredient = {
		value: 200,
		label: "Ingredient B",
	};

	const ingredientC: Ingredient = {
		value: 50,
		label: "Ingredient C",
		exludeFromTotalWeight: true,
	};

	const multiIngredientA: MultiIngredient = {
		label: "MultiIngredient A",
		ingredients: [ingredientA, ingredientB],
	};

	const multiIngredientB: MultiIngredient = {
		label: "MultiIngredient B",
		ingredients: [ingredientB, ingredientC],
	};

	it("calculates total weight for single ingredients", () => {
		const ingredients: Ingredient[] = [ingredientA, ingredientB];
		const multiplier = 2;
		const result = calculateTotalWeight({ ingredients, multiplier });

		expect(result).toBe(600);
	});

	it("calculates total weight for single ingredients with exclusions", () => {
		const ingredients: Ingredient[] = [ingredientA, ingredientB, ingredientC];
		const multiplier = 1;
		const result = calculateTotalWeight({ ingredients, multiplier });

		expect(result).toBe(300);
	});

	it("calculates total weight for multi ingredients", () => {
		const ingredients: MultiIngredient[] = [multiIngredientA, multiIngredientB];
		const multiplier = 1;
		const result = calculateTotalWeight({ ingredients, multiplier });

		expect(result).toBe(500);
	});

	it("calculates total weight for multi ingredients with multiplier", () => {
		const ingredients: MultiIngredient[] = [multiIngredientA, multiIngredientB];
		const multiplier = 2;
		const result = calculateTotalWeight({ ingredients, multiplier });

		expect(result).toBe(1000);
	});
});
