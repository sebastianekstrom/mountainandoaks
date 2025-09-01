import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";

import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";

import heroImage from "public/images/recipes/aland-sour/thumbnails/tall.png";
import metaImage from "public/images/recipes/aland-sour/thumbnails/meta.png";

import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    value: 5,
    label: "Gin",
    valueSuffix: "cl",
  },
  {
    value: 3,
    label: "Lemon juice",
    valueSuffix: "cl",
  },
  {
    value: 3,
    label: "Elderflower syrup",
    valueSuffix: "cl",
  },
  {
    value: 15,
    label: "Fresh pressed apple juice",
    valueSuffix: "cl",
  },
];

const STEPS = [
  <Text>Combine all ingredients in a shaker filled with ice.</Text>,
  <Text>Shake vigorously until the mixture is well-chilled.</Text>,
  <Text>Fill a glass with ice cubes and strain the cocktail into it.</Text>,
  <Text>Garnish with fresh mint leaves and a lemon wedge.</Text>,
];

export default function LandSour() {
  return (
    <Page
      metaTitle="Åland Sour"
      description="A refreshing gin cocktail where the crisp flavor of fresh pressed apple takes the lead, rounded out with bright citrus and a touch of elderflower sweetness."
      image={metaImage}
    >
      <Post
        title="Åland Sour"
        heroImage={heroImage}
        ingredients={
          <Ingredients ingredientSuffix="cocktail" ingredients={INGREDIENTS} />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              A refreshing gin cocktail where the crisp flavor of fresh pressed
              apple takes the lead, rounded out with bright citrus and a touch
              of elderflower sweetness.
            </Text>
            <Text variant="ingress">
              Depending on the acidity of the elderflower syrup and the fresh
              pressed apple juice, you may need to add 2 cl simple syrup for
              balance.
            </Text>
          </>
        }
      />
    </Page>
  );
}
