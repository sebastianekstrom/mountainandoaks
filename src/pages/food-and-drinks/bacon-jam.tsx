import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";

import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";

import heroImage from "public/images/recipes/bacon-jam/thumbnails/tall.png";
import metaImage from "public/images/recipes/bacon-jam/thumbnails/meta.png";

import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    value: 70,
    label: "Bacon",
  },
  {
    value: 25,
    label: "Onion",
  },
  {
    value: 25,
    label: "Shallots",
  },
  {
    value: 12.5,
    label: "Maple syrup",
  },
  {
    value: 10,
    label: "Brown sugar",
  },
  {
    value: 8.75,
    label: "Apple cider vinegar",
  },
  {
    value: 3.75,
    label: "Coffee",
  },
  {
    value: 2.5,
    label: "Garlic",
  },
];

const STEPS = [
  <Text>
    <b>Measure up all the ingredients</b> and put them in separate containers
    for later use
  </Text>,
  <Text>
    Finely chop the <b>garlic</b>, <b>shallots</b> and <b>onion</b>. Put into
    containers for later use
  </Text>,
  <Text>Cut the bacon into small 5mm/0.2inch squares</Text>,
  <Text>Fry the bacon on medium-high heat until crispy (about 10min)</Text>,
  <Text>
    Remove the bacon and place it on some paper towels, but keep the fat in the
    pan. Set the bacon aside for later use
  </Text>,
  <Text>
    Cook the <b>shallots</b> and <b>onion</b> in the bacon fat over very low
    heat (about a 3 on a 9-point scale) for about 30 minutes. If there's not
    enough fat, add some butter
  </Text>,
  <Text>
    Add <b>all remaining ingredients except the bacon</b>. Simmer on medium heat
    for 10 minutes
  </Text>,
  <Text>
    Add the <b>bacon</b>, give it a stir and let simmer for 1min. Season with
    salt to taste
  </Text>,
  <Text>
    Transfer the jam to an airtight container. Serve immediately or refrigerate
    for a few days
  </Text>,
];

export default function BaconJam() {
  return (
    <Page
      metaTitle="Bacon jam"
      description="This savory bacon jam is perfect for grilled cheese or burgers, combining smoky bacon, sweet onions, and maple syrup for a rich, flavorful boost."
      image={metaImage}
    >
      <Post
        title="Bacon jam"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            startingMultiplier={4}
            ingredientSuffix="portion"
            ingredients={INGREDIENTS}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              This savory bacon jam is perfect for grilled cheese or burgers,
              combining smoky bacon, sweet onions, and maple syrup for a rich,
              flavorful boost.
            </Text>
          </>
        }
      />
    </Page>
  );
}
