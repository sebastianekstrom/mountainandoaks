import type { Ingredient, MultiIngredient } from "types/recipe";

export const getIngredientType = (
  ingredientList: MultiIngredient[] | Ingredient[],
) => {
  const ingredients = ingredientList as any;

  if (ingredients[0]?.ingredients) {
    return "multi-part";
  }

  return "single-part";
};
