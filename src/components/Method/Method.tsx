import React from "react";

import { Step } from "components/Step/Step";
import { Text } from "components/Text/Text";

import { getRecipeMethodType } from "utils/getRecipeMethodType";

export interface MultiStepMethod {
  label: string;
  steps: React.ReactNode[];
}

export type SingleStepMethod = React.ReactNode[];

interface Props {
  recipeMethod: SingleStepMethod | MultiStepMethod[];
  completable?: boolean;
}

export const Method = ({ recipeMethod, completable = true }: Props) => {
  const isMultiStep = getRecipeMethodType(recipeMethod) === "multi-step";

  if (isMultiStep) {
    let id = 0;
    const method = recipeMethod as MultiStepMethod[];
    return (
      <div>
        {method.map((day, index) => {
          return (
            <div
              key={`${day.label}+${index}`}
              className={index !== 0 ? "mt-12 pt-10" : undefined}
            >
              <Text variant="h3" classNames="mt-4 -mb-4">
                {day.label}
              </Text>
              {day.steps.map((step, i) => {
                id = id + 1;
                return (
                  <Step
                    completable={completable}
                    key={i}
                    index={i}
                    step={step}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  const method = recipeMethod as SingleStepMethod[];
  return (
    <>
      {method.map((step, index) => {
        return (
          <Step
            completable={completable}
            key={index}
            index={index}
            step={step}
          />
        );
      })}
    </>
  );
};
