import type { Ingredient } from "types/recipe";

export const getTotalFlourAmount = (items: Ingredient[]) => {
  return items.reduce((acc, ingredient) => {
    return ingredient.isFlour ? acc + ingredient.value : acc;
  }, 0);
};
