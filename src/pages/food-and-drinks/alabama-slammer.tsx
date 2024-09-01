import React from "react";

import metaImage from "public/images/recipes/alabama-slammer/thumbnails/meta.png";
import heroImage from "public/images/recipes/alabama-slammer/thumbnails/tall.png";

import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    value: 12,
    label: "Orange juice",
    valueSuffix: "cl",
  },
  {
    value: 2,
    label: "Vodka",
    valueSuffix: "cl",
  },
  {
    value: 2,
    label: "Southern Comfort",
    valueSuffix: "cl",
  },
  {
    value: 2,
    label: "Amaretto",
    valueSuffix: "cl",
  },
  {
    value: 1,
    label: "Grenadine",
    valueSuffix: "cl",
  },
];

const STEPS = [
  <Text>
    Combine all ingredients, <b>except</b> orange juice, in a shaker filled with
    ice.
  </Text>,
  <Text>Shake vigorously until the mixture is well-chilled.</Text>,
  <Text>
    Fill a glass with ice cubes and <b>strain the cocktail</b> into it.
  </Text>,
  <Text>Top off with orange juice.</Text>,
  <Text>Garnish with a fresh orange wedge.</Text>,
];

export default function AlabamaSlammer() {
  return (
    <Page
      metaTitle="Alabama Slammer"
      description="Meet the Alabama Slammer, a refreshing cocktail with a sports twist! Combining vodka, grenadine, Southern Comfort, Amaretto, and orange juice, it delivers a lively fusion of flavors. Rumor has it, quarterback Brett Favre made it famous. Mix up this spirited drink, and cheers to good times!"
      image={metaImage}
    >
      <Post
        title="The Alabama Slammer"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="cocktail"
            ingredients={INGREDIENTS}
            additionalMeta={<Badge value="15min" label="Prep time" />}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              Meet the Alabama Slammer, a refreshing cocktail with a sports
              twist!
            </Text>
            <Text variant="ingress">
              Combining vodka, grenadine, Southern Comfort, Amaretto, and orange
              juice, it delivers a lively fusion of flavors. Rumor has it,
              quarterback Brett Favre made it famous. Mix up this spirited
              drink, and cheers to good times!
            </Text>
          </>
        }
      />
    </Page>
  );
}
