import type React from "react";

import { Badge } from "components/Badge/Badge";
import type { RecipeTimes } from "components/Ingredients/Ingredients";

import { roundValue } from "utils/roundValue";

import { pluralizeMinutes } from "./utils";

interface Props {
  weight?: number;
  hydration?: number | null;
  weightLabel?: string;
  excludeWeight?: boolean;
  recipeTimes?: RecipeTimes;
  additionalMeta?: React.ReactNode;
}

export const IngredientMeta = ({
  weight,
  hydration,
  weightLabel,
  excludeWeight = false,
  recipeTimes,
  additionalMeta,
}: Props) => {
  return (
    <div>
      <div className="flex mt-8">
        {!excludeWeight && (
          <div className="mr-4">
            <Badge
              value={`${roundValue(weight)}g`}
              label={weightLabel || "Weight"}
            />
          </div>
        )}
        {hydration && (
          <div className="mr-4">
            <Badge value={`${hydration}%`} label="Hydration" />
          </div>
        )}
        {recipeTimes?.proofTimeInMinutes && (
          <div className="mr-4">
            <Badge
              value={pluralizeMinutes(recipeTimes?.proofTimeInMinutes)}
              label="Proof time"
            />
          </div>
        )}
        {additionalMeta && <div className="mr-4">{additionalMeta}</div>}
      </div>
    </div>
  );
};
