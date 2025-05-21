import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";

import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";

import heroImage from "public/images/recipes/nuoc-cham/thumbnails/tall.png";
import metaImage from "public/images/recipes/nuoc-cham/thumbnails/meta.png";

import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    value: 40,
    label: "Water",
  },
  {
    value: 12,
    label: "Fish sauce",
  },
  {
    value: 10,
    label: "Sugar",
  },
  {
    value: 5,
    label: "Rice vinegar (white)",
  },
  {
    value: 4.5,
    label: "Lime juice (freshly squeezed)",
  },
  {
    value: 3.5,
    label: "Garlic",
    exludeFromTotalWeight: true,
  },
  {
    value: 0.5,
    label: "Chili",
    exludeFromTotalWeight: true,
  },
];

const STEPS = [
  <Text>
    Finely chop the <b>garlic</b> and <b>chili</b>.
  </Text>,
  <Text>
    Squeeze the <b>lime</b>. Use only fresh lime juice—bottled is a shortcut
    that just doesn’t cut it here.
  </Text>,
  <Text>
    Add the <b>sugar</b> to a mixing bowl.
  </Text>,
  <Text>
    Boil the <b>water</b> and pour it over the sugar. Stir until fully
    dissolved.
  </Text>,
  <Text>
    Once the mixture has cooled slightly (about 5–10 minutes), add the{" "}
    <b>garlic</b>, <b>chili</b>, <b>lime juice</b>, <b>fish sauce</b> and{" "}
    <b>rice vinegar</b>.
  </Text>,
  <Text>
    Let it sit for <b>5 minutes</b>, then taste for heat. If you want it hotter,
    let it sit a bit longer.
  </Text>,
  <Text>
    You can <b>strain out the chili and garlic</b> at this point, but also leave
    them in for more intense heat and flavor. Seal in an airtight container and
    refrigerate for up to a week.
  </Text>,
];

export default function NuocCham() {
  return (
    <Page
      metaTitle="Nuoc Cham"
      description="A bold and balanced Vietnamese dipping sauce, known for its sweet, sour, salty, and spicy kick. Perfect with grilled dishes, noodles, or fresh rolls—adds brightness and depth to any meal."
      image={metaImage}
    >
      <Post
        title="Nuoc Cham"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            startingMultiplier={4}
            ingredientSuffix="portions"
            ingredients={INGREDIENTS}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              A bold and balanced Vietnamese dipping sauce, known for its sweet,
              sour, salty, and spicy kick. Perfect with grilled dishes, noodles,
              or fresh rolls—adds brightness and depth to any meal.
            </Text>
          </>
        }
      />
    </Page>
  );
}
