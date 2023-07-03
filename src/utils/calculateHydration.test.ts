import { calculateHydration } from "./calculateHydration";

const MULTI_INGREDIENTS = [
  {
    label: "Poolish",
    ingredients: [
      {
        value: 250,
        label: "Water",
        isWater: true,
      },
      {
        value: 250,
        label: "Flour (Tipo 00)",
        isFlour: true,
      },
    ],
  },
  {
    label: "Dough",
    ingredients: [
      {
        value: 750,
        label: "Water",
        isWater: true,
      },
      {
        value: 1000,
        label: "Manitoba flour",
        isFlour: true,
      },
    ],
  },
];

const SINGLE_INGREDIENTS = [
  {
    value: 750,
    label: "Water",
    isWater: true,
  },
  {
    value: 30,
    label: "Olive oil",
  },
  {
    value: 1000,
    label: "Flour (Tipo 00)",
    isFlour: true,
  },
  {
    value: 20,
    label: "Salt",
  },
];

const SINGLE_INGREDIENTS_FLOAT = [
  {
    value: 500,
    label: "Water",
    isWater: true,
  },
  {
    value: 1200,
    label: "Flour (Tipo 00)",
    isFlour: true,
  },
];

describe("calculateHydration", () => {
  it("calculates the correct weight for single ingredients", () => {
    const result = calculateHydration(SINGLE_INGREDIENTS);

    expect(result).toEqual(75);
  });

  it("properly rounds", () => {
    const result = calculateHydration(SINGLE_INGREDIENTS_FLOAT);

    expect(result).toEqual(41.7);
  });

  it("calculates the correct weight with poolish", () => {
    const result = calculateHydration(MULTI_INGREDIENTS);

    expect(result).toEqual(80);
  });

  it("returns null if no value", () => {
    const result = calculateHydration([
      {
        value: 500,
        label: "Water",
      },
      {
        value: 1200,
        label: "Flour (Tipo 00)",
      },
    ]);

    expect(result).toEqual(null);
  });

  it("returns null if no value for multivariant", () => {
    const result = calculateHydration([
      {
        label: "Poolish",
        ingredients: [
          {
            value: 250,
            label: "Water",
          },
          {
            value: 250,
            label: "Flour (Tipo 00)",
          },
        ],
      },
      {
        label: "Dough",
        ingredients: [
          {
            value: 750,
            label: "Water",
          },
          {
            value: 1000,
            label: "Manitoba flour",
          },
        ],
      },
    ]);

    expect(result).toEqual(null);
  });
});
