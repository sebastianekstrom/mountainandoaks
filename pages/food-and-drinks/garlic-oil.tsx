import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Link from "components/Link";
import Text from "components/Text";
import Ingredients from "components/Ingredients";

import heroImage from "public/images/recipes/garlic-oil/thumbnails/tall.jpg";
import metaImage from "public/images/recipes/garlic-oil/thumbnails/meta.png";
import Method from "components/Method";

const INGREDIENTS = [
  {
    value: 10,
    label: "Cloves of garlic",
    valueSuffix: false,
    exludeFromTotalWeight: true,
  },
  {
    value: 160,
    label: "Olive oil",
  },
];

const STEPS = [
  <Text>
    Peel the garlic and crush the cloves with the flat side of a knife
  </Text>,
  <Text>
    In a cold pan, add the garlic and the olive oil. If the garlic isn't covered
    by the oil add some more until they are fully submerged
  </Text>,
  <Text>
    Turn on the stove on very low heat, about a 2 on a stove with 9 levels
  </Text>,
  <Text>
    Cook the garlic for about <b>20 minutes</b>, stirring occasionally
  </Text>,
  <Text>
    Pour the oil and the cloves into a jar and cover it with a lid or plastic
    wrap. Store in the fridge for a <b>maximum of 3 days - 4 days</b>
  </Text>,
];

export default function GarlicOil() {
  return (
    <Page
      metaTitle="Garlic oil"
      description="The perfect oil to drizzle over your pizza"
      image={metaImage}
    >
      <Post
        title="Garlic oil"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            hideWeight
            ingredientSuffix="batch"
            ingredients={INGREDIENTS}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              This garlic infused oil is perfect to drizzle on top of your{" "}
              <Link href="/pizza/new-york-style">pizza</Link>, or just dip a
              freshly baked piece of{" "}
              <Link href="/bread/the-simple-loaf">bread</Link> in. Don't use
              your fancy olive oil for this, use something cheap since the
              garlic flavour is very intense.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
