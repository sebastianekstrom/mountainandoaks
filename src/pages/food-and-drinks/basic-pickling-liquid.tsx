import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";

import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";

import heroImage from "public/images/recipes/basic-pickling-liquid/thumbnails/tall.png";
import metaImage from "public/images/recipes/basic-pickling-liquid/thumbnails/meta.png";

import { Method } from "components/Method/Method";
import { Badge } from "components/Badge/Badge";

const INGREDIENTS = [
  {
    value: 200,
    label: "Champagne vinegar (or white wine vinegar)",
  },
  {
    value: 100,
    label: "Sugar (granulated)",
  },
  {
    value: 100,
    label: "Water",
  },
];

const STEPS = [
  <Text>
    Bring <b>vinegar</b>, <b>sugar</b>, and <b>water</b> to a boil in a
    saucepan. Stir until the sugar has dissolved.
  </Text>,
  <Text>
    Pour the liquid into a bowl and let it cool slightly (while you prepare the
    rest).
  </Text>,
  <Text>Prepare your vegetables (e.g. slice, chop, etc.)</Text>,
  <Text>Place the vegetables in a jar with a lid.</Text>,
  <Text>Pour the liquid over so it covers. Seal with the lid.</Text>,
  <Text>Refrigerate for at least 1 hour before serving.</Text>,
];

export default function BasicPicklingLiquid() {
  return (
    <Page
      metaTitle="Basic pickling liquid"
      description="A quick, flexible pickling base that’s easy to make and can be scaled for any amount of vegetables."
      image={metaImage}
    >
      <Post
        title="Basic pickling liquid"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="batch"
            ingredients={INGREDIENTS}
            additionalMeta={
              <>
                <Badge value="20min" label="Prep time" />
              </>
            }
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              A quick, flexible pickling base that’s easy to make and can be
              scaled for any amount of vegetables. The ratio is 2 parts vinegar
              to 1 part sugar to 1 part water.
            </Text>
            <Text variant="ingress">
              Perfect for pickling shallots, white onion, radishes, or any other
              vegetable.
            </Text>
          </>
        }
      />
    </Page>
  );
}
