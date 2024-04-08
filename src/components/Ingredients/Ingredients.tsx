import type React from "react";
import { useState } from "react";

import { IngredientMeta } from "components/IngredientMeta/IngredientMeta";
import { Table } from "components/Table/Table";

import type {
  Ingredient,
  MultiIngredient as _MultiIngredient,
} from "types/recipe";

import { calculateHydration } from "utils/calculateHydration";
import { calculateTotalWeight } from "utils/calculateTotalWeight";
import { getIngredientType } from "utils/getIngredientType";

import { Increaser } from "./components/Increaser";
import { MultiIngredient } from "./components/MultiIngredient";

export interface RecipeTimes {
  prepTimeInMinutes: number;
  proofTimeInMinutes: number;
  roomTempTimeInMinutes?: number;
}

interface Props {
  ingredients: Ingredient[] | _MultiIngredient[];
  description?: React.ReactNode;
  ingredientSuffix: string;
  weightLabel?: string;
  onlyCalculateMetaFrom?: Ingredient[];
  initialValue?: number;
  excludeWeight?: boolean;
  recipeTimes?: RecipeTimes;
  hideWeight?: boolean;
  startingMultiplier?: number;
  additionalMeta?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onChangeMultiplier?: (value: number) => void;
}

export const Ingredients = ({
  initialValue,
  ingredients,
  description,
  ingredientSuffix,
  weightLabel,
  excludeWeight,
  onlyCalculateMetaFrom,
  recipeTimes,
  hideWeight,
  startingMultiplier,
  additionalMeta,
  onChangeMultiplier,
}: Props) => {
  const [multiplier, setMultiplier] = useState(startingMultiplier || 1);
  const isMultipleIngredients = getIngredientType(ingredients) === "multi-part";

  const totalWeight = calculateTotalWeight({
    ingredients: onlyCalculateMetaFrom || ingredients,
    multiplier,
  });
  const hydration = calculateHydration(onlyCalculateMetaFrom || ingredients);

  const value = initialValue ? initialValue : 1;
  const yields = value * multiplier;

  const onIncrease = () => {
    const multi = multiplier + 1;
    setMultiplier(multi);
    onChangeMultiplier?.(multi);
  };

  const onDecrease = () => {
    if (multiplier === 1) {
      return;
    }
    const multi = multiplier - 1;
    setMultiplier(multi);
    onChangeMultiplier?.(multi);
  };

  return (
    <div>
      <aside role="toolbar">
        <Increaser
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          yields={yields}
          ingredientSuffix={ingredientSuffix}
        />
      </aside>

      <section className="mb-8 lg:mb-0" data-testid="INGREDIENT_LIST">
        <div>{description || " "}</div>

        {isMultipleIngredients ? (
          <MultiIngredient
            ingredients={ingredients as _MultiIngredient[]}
            multiplier={multiplier}
          />
        ) : (
          <Table items={ingredients as Ingredient[]} multiplier={multiplier} />
        )}
      </section>

      {!hideWeight && (
        <IngredientMeta
          weight={totalWeight}
          hydration={hydration}
          weightLabel={weightLabel}
          excludeWeight={excludeWeight}
          recipeTimes={recipeTimes}
          additionalMeta={additionalMeta}
        />
      )}
    </div>
  );
};
