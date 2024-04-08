import type { Ingredient, MultiIngredient } from "types/recipe";

export const calculateHydration = (
  ingredients: Ingredient[] | MultiIngredient[] | undefined,
) => {
  if (!ingredients) return null;

  const isMulti = (ingredients[0] as MultiIngredient).ingredients !== undefined;

  let totalWater = 0;
  let totalFlour = 0;

  for (const current of ingredients) {
    const currentIngredients = isMulti
      ? (current as MultiIngredient).ingredients
      : [current as Ingredient];

    for (const value of currentIngredients) {
      if (value.isWater) {
        totalWater += value.value;
      } else if (value.isFlour) {
        totalFlour += value.value;
      }
    }
  }

  if (totalWater === 0 || totalFlour === 0) {
    return null;
  }

  const percentage = (totalWater / totalFlour) * 100;

  return Math.round(percentage * 10) / 10;
};
