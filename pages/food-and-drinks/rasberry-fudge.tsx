import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Text from "components/Text";
import Ingredients from "components/Ingredients";
import Badge from "components/Badge";

import heroImage from "public/images/recipes/rasberry-fudge/thumbnails/tall.jpg";
import metaImage from "public/images/recipes/rasberry-fudge/thumbnails/meta.png";
import Method from "components/Method";

const INGREDIENTS = [
  {
    value: 4,
    label: "Vanilla vodka",
    valueSuffix: "cl",
  },
  {
    value: 4,
    label: "Rasberry purée",
    valueSuffix: "cl",
  },
  {
    value: 2,
    label: "Butterscotch liqeur (De Kuyper)",
    valueSuffix: "cl",
  },
  {
    value: 2,
    label: "Lime juice",
    valueSuffix: "cl",
  },
  {
    value: 2,
    label: "Simple syrup (1:1 ratio)",
    valueSuffix: "cl",
  },
];

const STEPS = [
  <Text>
    Combine <b>all ingredients</b> in a shaker filled with ice. You can either
    purchase ready-made raspberry purée or make your own by blending fresh
    raspberries with a touch of sugar.
  </Text>,
  <Text>Shake vigorously until the mixture is well-chilled.</Text>,
  <Text>
    Strain the cocktail into a chilled glass filled with ice. Savor and enjoy!
  </Text>,
];

export default function RasberryFudge() {
  return (
    <Page
      metaTitle="Rasberry fudge"
      description="A refreshing cocktail inspired by Swedish bartender Jimmy Dymott, but with a few creative twists. Savor the delightful combination of sweet raspberries, rich fudge, and a hint of vanilla in this easygoing, flavorsome creation. Perfect for those warm-weather gatherings or simply to unwind and enjoy."
      image={metaImage}
    >
      <Post
        title="Rasberry fudge"
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
              A refreshing cocktail inspired by Swedish bartender Jimmy Dymott,
              but with a few twists.
            </Text>
            <Text variant="ingress">
              Savor the delightful combination of sweet raspberries, rich fudge,
              and a hint of vanilla in this easygoing, flavorsome creation.
              Perfect for those warm-weather gatherings or simply to unwind and
              enjoy.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
