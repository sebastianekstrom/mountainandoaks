import React from "react";

import metaImage from "public/images/recipes/basil-infused-oil/thumbnails/meta.png";
import heroImage from "public/images/recipes/basil-infused-oil/thumbnails/tall.jpg";

import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    value: 20,
    label: "Fresh basil",
  },
  {
    value: 15,
    label: "Fresh spinach leaves",
  },
  {
    value: 80,
    label: "Oil (olive or rapeseed)",
  },
  {
    value: 1.5,
    label: "White wine vinegar",
  },
  {
    value: 1,
    label: "Salt",
    valueSuffix: false,
    excludeValue: true,
  },
];

const STEPS = [
  <Text>
    In a mixing container, combine the <b>basil</b>, <b>spinach</b>, <b>oil</b>{" "}
    and <b>vinegar</b>.
  </Text>,
  <Text>
    Using a blender or immersion blender, blend the ingredients together until
    you achieve a <b>smooth texture</b>.
  </Text>,
  <Text>
    Season the mixture with <b>salt</b>, according to your taste preferences.
    Perhaps it might need a bit more acid (vinegar), be sure to taste and adjust
    as needed.
  </Text>,
  <Text>
    At this point, you can choose to use the basil-infused oil as is, or you can{" "}
    <b>strain it</b> through a fine mesh sieve or cheesecloth for an even
    smoother consistency. This step will help remove any remaining solids,
    leaving you with a silky, infused oil.
  </Text>,
  <Text>
    Transfer the finished basil-infused oil to an airtight container, and store
    it in the refrigerator for up to a week.
  </Text>,
];

export default function BasilInfusedOil() {
  return (
    <Page
      metaTitle="Basil-infused oil"
      description="Elevate your meals with this easy-to-make recipe. Adding a flavorful twist to pizza, pasta, or grilled veggies, this homemade basil-infused oil is sure to impress."
      image={metaImage}
    >
      <Post
        title="Basil-infused oil"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="batch"
            ingredients={INGREDIENTS}
            additionalMeta={<Badge value="10min" label="Prep time" />}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              Elevate your meals with this easy-to-make recipe. Adding a
              flavorful twist to pizza, pasta, or grilled veggies, this homemade
              basil-infused oil is sure to impress.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
