import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Link } from "components/Link/Link";
import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";

import heroImage from "public/images/recipes/garlic-oil/thumbnails/tall.jpg";
import metaImage from "public/images/recipes/garlic-oil/thumbnails/meta.png";
import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    value: 10,
    label: "Cloves of garlic",
    valueSuffix: false,
    exludeFromTotalWeight: true,
  },
  {
    value: 160,
    label: "Rapeseed oil",
  },
];

const STEPS = [
  <Text>Peel the garlic</Text>,
  <Text>
    In a cold pan, add the garlic and the rapeseed oil. If the garlic isn't
    covered by the oil add some more until they are fully submerged
  </Text>,
  <Text>
    Turn on the stove on very low heat, about a 2-3 on a stove with 9 levels
  </Text>,
  <Text>
    Cook the garlic for about <b>40 minutes</b>, stirring occasionally
  </Text>,
  <Text>
    Pour the oil and the cloves into a jar and cover it with a lid or plastic
    wrap. Store in the fridge for up to <b>maximum of 4 days</b>
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
              <Link href="/bread/the-simple-loaf">bread</Link> in.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
