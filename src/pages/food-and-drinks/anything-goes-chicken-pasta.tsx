import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";

import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";

import heroImage from "public/images/recipes/anything-goes-chicken-pasta/thumbnails/tall.png";
import metaImage from "public/images/recipes/anything-goes-chicken-pasta/thumbnails/meta.png";

import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    value: 100,
    label: "Pasta",
  },
  {
    value: 100,
    label: "Chicken thighs",
  },
  {
    value: 87.5,
    label: "Heavy cream",
  },
  {
    value: 25,
    label: "White wine",
  },
  {
    value: 25,
    label: "Chicken stock",
  },
  {
    value: 25,
    label: "Pepperoni",
  },
  {
    value: 12.5,
    label: "Sun-dried tomatoes",
  },
  {
    value: 15,
    label: "Shallots",
  },
  {
    value: 6.25,
    label: "Tomato purée",
  },
  {
    value: 7.5,
    label: "Parmesan",
  },
  {
    value: 7.5,
    label: "Confit garlic (divide by 3 if using regular)",
  },
  {
    value: 1.25,
    label: "Sambal oelek (or spicy thing of your choice)",
  },
  {
    value: 0,
    label: "Parsley and parmesan for garnish",
    excludeValue: true,
    valueSuffix: false,
  },
];

const STEPS = [
  <Text>
    <b>Measure all the ingredients</b> and place them in separate containers for
    later use.
  </Text>,

  <Text>
    Finely <b>chop the shallots and garlic</b> and <b>slice the pepperoni</b>.{" "}
    <b>Cut the chicken</b> into small pieces (about 3 cm / 1.1 inch). Set aside
    for later use.
  </Text>,

  <Text>Start boiling the pasta water.</Text>,

  <Text>
    Heat a pan over medium-high heat and <b>fry the chicken</b> for a few
    minutes until it has a nice color.
  </Text>,

  <Text>
    Lower the pan to medium heat and <b>fry the pepperoni</b>. When it starts to
    get a bit crispy, <b>add the tomato purée</b>, <b>sun dried tomatoes</b> and
    the <b>Sambal oelek</b> (or the other spicy ingredient of your choice). Let
    cook for 2-3 minutes.
  </Text>,
  <Text>Add the shallots and garlic, fry for 2-3 minutes.</Text>,

  <Text>
    Increase the heat to high and <b>add the wine</b>, reducing it until it no
    longer smells acidic.
  </Text>,

  <Text>Add the chicken stock and reduce it by half.</Text>,

  <Text>Start cooking the pasta.</Text>,

  <Text>
    Lower the heat to medium and add the <b>cream</b>, and <b>parmesan</b>. Let
    it simmer for a few minutes.
  </Text>,

  <Text>
    When the pasta is close to al dente, add it to the pan with the sauce and
    stir until everything is well combined.
  </Text>,

  <Text>
    Taste and season as needed. This dish is rich, so you may want to freshen it
    up with some lemon juice or white wine vinegar. Top with parsley and freshly
    grated parmesan!
  </Text>,
];

export default function AnythingGoesChickenPasta() {
  return (
    <Page
      metaTitle="Anything-goes chicken pasta"
      description='This dish was born from a fridge-cleaning session, making it perfect for when you want to use up whatever ingredients you have on hand. Feel free to swap or add anything—this is a versatile, "anything-goes" recipe where you can improvise as needed.'
      image={metaImage}
    >
      <Post
        title="Anything-goes chicken pasta"
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
              This dish was born from a fridge-cleaning session, making it
              perfect for when you want to use up whatever ingredients you have
              on hand. Feel free to swap or add anything—this is a versatile,
              "anything-goes" recipe where you can improvise as needed.
            </Text>
          </>
        }
      />
    </Page>
  );
}
