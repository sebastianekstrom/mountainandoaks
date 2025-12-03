import React from "react";

import metaImage from "public/images/pizza/hybrid/thumbnails/meta.png";
import heroImage from "public/images/pizza/hybrid/thumbnails/tall.jpg";

import { Ingredients } from "components/Ingredients/Ingredients";
import { Link } from "components/Link/Link";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { PokeTest } from "components/PokeTest/PokeTest";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";
import { WindowPaneTest } from "components/WindowPaneTest/WindowPaneTest";

const INGREDIENTS = [
  {
    label: "Poolish",
    ingredients: [
      {
        value: 40,
        label: "Water",
        isWater: true,
      },
      {
        value: 40,
        label: "Flour (Tipo 00)",
        isFlour: true,
      },
      {
        value: 1,
        label: "Honey",
      },
      {
        value: 1,
        label: "Instant yeast",
      },
    ],
  },
  {
    label: "Dough",
    ingredients: [
      {
        value: 100,
        label: "Manitoba flour",
        isFlour: true,
      },
      {
        value: 30,
        label: "Tipo 00 flour",
        isFlour: true,
      },
      {
        value: 65,
        label: "Water",
        isWater: true,
      },
      {
        value: 13,
        label: "Sugar",
      },
      {
        value: 11,
        label: "Olive oil",
      },
      {
        value: 5,
        label: "Salt",
      },
    ],
  },
];

const STEPS = [
  {
    label: "Day 1 - Poolish making time",
    steps: [
      <Text>
        Mix the all the ingredients for the <b>poolish</b> in a container. Make
        sure that the container only gets around half filled since the poolish
        will rise over night
      </Text>,
      <Text>
        Cover the container with plastic wrap and let it rest at room
        temperature for <b>1 hour</b>
      </Text>,
      <Text>
        Place the poolish in the fridge for between <b>16-24 hours</b>
      </Text>,
    ],
  },
  {
    label: "Day 2 - Pizza making time",
    steps: [
      <Text>
        Take the poolish out from the fridge <b>1 hour</b> before you start the
        next step
      </Text>,
      <Text>
        In a container, mix all the dry ingredients (Tipo 00, Manitoba, sugar,
        salt). After that add all the wet ingredients (water, olive oil) and the
        poolish. Give it a quick mix with a spoon or your hands until everything
        is combined.
      </Text>,
      <Text extra={<WindowPaneTest />}>
        Start kneading the dough. If you have a stand mixer mix it for 3 minutes
        on low speed to combine the dough, and then 5 minutes on medium to
        develop gluten strength. If you knead by hand, knead for 10
        minutes.{" "}
      </Text>,
      <Text>
        Lightly grease another bowl with olive oil, shape the dough into a ball
        and place it in the bowl
      </Text>,
      <Text>
        Cover the bowl in plastic wrap or a wet towel to prevent it from drying
        out, and let rest for <b>60 minutes</b>
      </Text>,
      <Text>
        Divide the dough into <b>280g - 300g</b> pieces and{" "}
        <Link external href="https://youtu.be/UrUv78jyYsY?t=319">
          shape them
        </Link>
        into balls
      </Text>,
      <Text>
        Place the dough balls on a baking tray and cover them with a damp towel
        so they don't dry out
      </Text>,
      <Text extra={<PokeTest />}>
        Let rest for <b>1-2 hours</b>, or until they are puffy and doubled in
        size. <br />
      </Text>,
      <Text>
        Time to bake! For best results in a home oven, please see my guide on
        how to{" "}
        <Link href="/guides/baking-pizza-in-home-oven">
          bake pizza in a home oven
        </Link>
      </Text>,
    ],
  },
];

export default function HybridDough() {
  return (
    <Page
      metaTitle="The hybrid pizza dough"
      description="A mashup between New York and Naples"
      image={metaImage}
    >
      <Post
        title="The hybrid pizza dough"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="pizza"
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
              This dough is the result of me experimenting with two different
              doughs; the New York style and the Neopolitan style. It uses{" "}
              poolish, which is a pre-fermented dough that you make the day
              before and later incorporate into the dough. The poolish will
              greatly increase the flavor and texture of the pizza.
            </Text>
            <Text variant="ingress">
              The recipe also uses both Tipo 00 and Manitoba flour, Manitoba
              flour has a very high{" "}
              <Link external href="https://en.wikipedia.org/wiki/Wheat_flour">
                W strength
              </Link>{" "}
              which results in better gluten development.
            </Text>
          </>
        }
      />
    </Page>
  );
}
