import type { Ingredient, MultiIngredient } from "types/recipe";

interface Params {
	ingredients: Ingredient[] | MultiIngredient[] | undefined;
	multiplier: number;
}

const getTotalWeight = (ingredients: Ingredient[]): number => {
	return ingredients.reduce((acc: number, value: Ingredient) => {
		return !value.exludeFromTotalWeight ? acc + value.value : acc;
	}, 0);
};

export const calculateTotalWeight = ({ ingredients, multiplier }: Params) => {
	if (!ingredients) return 0;

	const isMulti = (ingredients[0] as MultiIngredient).ingredients !== undefined;
	let totalWeight = 0;

	if (isMulti) {
		for (const multiIngredient of ingredients as MultiIngredient[]) {
			totalWeight += getTotalWeight(multiIngredient.ingredients);
		}
	} else {
		totalWeight = getTotalWeight(ingredients as Ingredient[]);
	}

	return totalWeight * multiplier;
};
