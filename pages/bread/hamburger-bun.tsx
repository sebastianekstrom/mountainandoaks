import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Link from "components/Link";
import Text from "components/Text";
import Ingredients from "components/Ingredients";
import PokeTest from "components/PokeTest";

import heroImage from "public/images/bread/bun/thumbnails/tall.jpg";
import metaImage from "public/images/bread/bun/thumbnails/meta.png";
import Method from "components/Method";

const INGREDIENTS = [
  {
    label: "Dough",
    ingredients: [
      {
        value: 52,
        label: "All purpose flour",
        isFlour: true,
      },
      {
        value: 16.6666,
        label: "Water",
        isWater: true,
      },
      {
        value: 12.5,
        label: "Baked potato",
      },
      {
        value: 6.25,
        label: "Butter",
      },
      {
        value: 5.83,
        label: "Sugar",
      },
      {
        value: 5,
        label: "Egg",
      },
      {
        value: 1.5,
        label: "Dough conditioner (optional)",
      },
      {
        value: 1,
        label: "Salt",
      },
      {
        value: 0.666,
        label: "Instant yeast",
      },
    ],
  },
  {
    label: "Egg wash",
    ingredients: [
      {
        value: 1,
        label: "Egg",
        exludeFromTotalWeight: true,
        valueSuffix: false,
        shouldNotBeDuplicated: true,
      },
      {
        value: 1,
        label: "Splash of water",
        exludeFromTotalWeight: true,
        valueSuffix: false,
        shouldNotBeDuplicated: true,
      },
    ],
  },
  {
    label: "Melted butter",
    ingredients: [
      {
        value: 5,
        label: "Butter",
      },
    ],
  },
];

const STEPS = [
  <Text>
    Boil the baked potato until soft and let it cool. This can be done the day
    before baking to save time.
  </Text>,
  <Text>
    Add all the ingredients in a mixing bowl and mix with a dough hook on medium
    speed for <b>8-10min</b>. The dough will look loose at around{" "}
    <b>4-5 minutes</b> before it comes together into a nice ball that’s no
    longer extremely sticky
  </Text>,
  <Text>
    Cover the bowl with plastic wrap and let proof at room temperature for{" "}
    <b>30min</b>.
  </Text>,
  <Text>
    Use a soaking wet hand and perform <b>4 stretch & folds</b>. This is done to
    create gluten strength, you can see an example of it{" "}
    <Link href="https://www.youtube.com/watch?v=QYzxulQY1Gc">here</Link>.
  </Text>,
  <Text>
    Cover the bowl with plastic wrap and let proof at room temperature for
    another <b>30min</b>.
  </Text>,
  <Text>
    While the dough is proofing, <b>preheat the oven to 180°C/356°F</b> and{" "}
    <b>melt some butter</b> which you'll use to brush the buns later.
  </Text>,
  <Text>
    The dough has probably risen a bit, but we don't want any big air bubbles in
    our dough <b>so degas the dough by poking it with your hands</b>. You can
    also gently hit it with your fists, whatever makes the air bubbles go away.
  </Text>,
  <Text extra={<PokeTest />}>
    Divide the dough into equal pieces (about <b>100g</b> each). Shape each
    piece of dough into a ball and place onto a baking sheet lined with
    parchment paper. Cover with a damp towel to proof for <b>60-90min</b>.
  </Text>,
  <Text>
    Whisk the egg and a splash of water and brush the top and sides of the buns.
  </Text>,
  <Text>
    Put the baking sheet into the oven and let the dough bake for{" "}
    <b>15-18min</b> until golden brown. Rotate the baking sheet halfway through
    to create an even browning.
  </Text>,
  <Text>
    Brush tops with melted butter and let them rest for at least{" "}
    <b>20 minutes</b> before eating.
  </Text>,
];

export default function HamburgerBun() {
  return (
    <Page
      metaTitle="Hamburger bun"
      description="A super soft and chewy burger bun"
      image={metaImage}
    >
      <Post
        title="Hamburger bun"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="bun"
            ingredients={INGREDIENTS}
            recipeTimes={{
              proofTimeInMinutes: 120,
              roomTempTimeInMinutes: 60,
              prepTimeInMinutes: 30,
            }}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              These are the perfect buns for a smashed burger (somewhere around
              a 75g patty), or whatever burger you prefer.
            </Text>
            <Text variant="ingress">
              It uses something called dough conditioner, which is like the MSG
              of the baking world. It speeds up proofing time, strengthens the
              gluten and improves caramelization in the oven. This is totally
              optional, but try it if you can get a hold of it!
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
