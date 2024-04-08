import { getIngredientType } from "./getIngredientType";

const MULTI_PART = [
  {
    label: "Poolish",
    ingredients: [
      {
        value: 40,
        label: "Water",
        isWater: true,
      },
      {
        value: 40,
        label: "Flour (Tipo 00)",
        isFlour: true,
      },
    ],
  },
  {
    label: "Dough",
    ingredients: [
      {
        value: 11,
        label: "Olive oil",
      },
      {
        value: 5,
        label: "Salt",
      },
    ],
  },
];

const SINGLE_PART = [
  {
    value: 10,
    label: "Cloves of garlic",
  },
  {
    value: 160,
    label: "Olive oil",
  },
];

describe("getIngredientType", () => {
  it("returns 'multi-part' if the ingredient has multiple parts", () => {
    expect(getIngredientType(MULTI_PART)).toBe("multi-part");
  });

  it("returns 'single-part' if the ingredient has a single part", () => {
    expect(getIngredientType(SINGLE_PART)).toBe("single-part");
  });
});
