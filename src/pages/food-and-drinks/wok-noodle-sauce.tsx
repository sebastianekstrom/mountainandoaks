import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";

import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";

import heroImage from "public/images/recipes/wok-noodle-sauce/thumbnails/tall.png";
import metaImage from "public/images/recipes/wok-noodle-sauce/thumbnails/meta.png";

import { Method } from "components/Method/Method";

const INGREDIENTS = [
  { value: 18.33, label: "Light soy sauce" },
  { value: 16.67, label: "Water" },
  { value: 11.67, label: "Dark soy sauce" },
  { value: 11.67, label: "Sugar" },
  { value: 8.33, label: "Oyster sauce" },
  { value: 6.5, label: "Sambal badjak" },
  { value: 3.33, label: "Concentrated chicken stock" },
  { value: 3.33, label: "Rice vinegar" },
  { value: 2, label: "Cornstarch" },
  { value: 0.67, label: "MSG" },
  { value: 0.67, label: "Sesame oil" },
  { value: 0.17, label: "Five spice" },
];

const STEPS = [
  <Text>
    Combine the <b>light soy sauce</b> and <b>cornstarch</b> in a bowl.{" "}
    <b>Stir thoroughly</b> until no lumps remain.
  </Text>,

  <Text>Add the remaining ingredients and mix well.</Text>,
  <Text>
    Pour the sauce into your stir-fry towards the end of cooking. Add more water
    if it feels too thick.
  </Text>,
];

export default function WokNoodleSauce() {
  return (
    <Page
      metaTitle="Wok Noodle Sauce"
      description="A sweet and savory sauce packed with umami—perfect for tossing with noodles, beef, and crisp veggies in a hot wok."
      image={metaImage}
    >
      <Post
        title="Wok Noodle Sauce"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            startingMultiplier={3}
            ingredientSuffix="portion"
            ingredients={INGREDIENTS}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              A sweet and savory sauce packed with umami—perfect for tossing
              with noodles, beef, and crisp veggies in a hot wok.
            </Text>
          </>
        }
      />
    </Page>
  );
}
