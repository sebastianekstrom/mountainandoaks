import React from "react";

import metaImage from "public/images/pizza/54-new-york-style/thumbnails/meta.png";
import heroImage from "public/images/pizza/54-new-york-style/thumbnails/tall.png";

import { Alert } from "components/Alert/Alert";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Link } from "components/Link/Link";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    value: 164,
    label: "Bread flour",
    isFlour: true,
  },
  {
    value: 103,
    label: "Water",
    isWater: true,
  },
  {
    value: 4.3,
    label: "Salt",
  },
  {
    value: 3.4,
    label: "Vegetable oil",
  },
  {
    value: 0.1,
    label: "Dry yeast",
  },
];

const STEPS = [
  <Text>
    Warm up the water to room temperature, around <b>20°C/68°F</b>. The easiest
    way to do this is by pouring the water into a glass container and
    microwaving it for a few seconds. Use a thermometer to make sure the water
    isn't too hot, as that would kill the yeast.
  </Text>,
  <Text>
    In a bowl, pour the <b>water</b>, <b>yeast</b> and <b>flour</b>.
  </Text>,
  <Text>
    Turn the mixer on low speed and let it run for <b>8 minutes</b>. If you
    knead by hand, knead for about 10 minutes.
  </Text>,
  <Text>
    Add the <b>vegetable oil</b> and <b>salt</b> and let it mix on medium speed
    for <b>2-5 minutes</b> until the oil is properly incorporated in the dough.
  </Text>,
  <Text>
    Cover the bowl with plastic wrap, or a wet towel, and let it rest in room
    temperature for <b>10 hours</b>.
  </Text>,
  <Text>
    After the bulk rest, <b>divide the dough</b> into equal parts. Use a kitchen
    scale to get the exact measurements.
  </Text>,
  <Text
    extra={
      <Alert
        description={
          <>
            Even though the container is coated in oil, the bottom of the dough
            can still stick to it. Place a piece of parchment paper at the
            bottom of the container to prevent this.
          </>
        }
      />
    }
  >
    Shape the doughs into a ball (see example{" "}
    <Link href="https://youtu.be/OjsCEJ8CWlg?t=361" external>
      here
    </Link>
    ) and place each dough ball in a container that is lightly oiled with
    vegetable oil and air tight.
  </Text>,
  <Text>
    Place in the fridge and let it rest for <b>44 hours</b>.
  </Text>,
  <Text>
    Take the dough out of the fridge about <b>1-2 hours</b> before the bake, the
    dough should come up to room temperature. To learn how to bake the perfect
    pizza in a home oven, please see{" "}
    <Link href="/guides/baking-pizza-in-home-oven">my guide here</Link>. <br />
    <br /> I'd recommending using my{" "}
    <Link href="/pizza/new-york-style-sauce">New York style tomato sauce</Link>{" "}
    for the most authentic experience.
  </Text>,
];

export default function The54() {
  return (
    <Page
      metaTitle="The 54 – A long proofed New York style pizza"
      description="The classic New York style pizza dough, long proofed for 54 hours to develop maximum taste"
      image={metaImage}
    >
      <Post
        title="The 54 – A long proofed New York style pizza"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="pizza"
            ingredients={INGREDIENTS}
            recipeTimes={{
              proofTimeInMinutes: 3240,
              roomTempTimeInMinutes: 60,
              prepTimeInMinutes: 30,
            }}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              This recipe is like the cool cousin of my{" "}
              <Link href="/pizza/new-york-style">New York Style pizza</Link>{" "}
              who's all about taking its sweet time to make sure it's got max
              flavor. We're talkin' a 54-hour proofing marathon here, so you'll
              need just a smidge of yeast.
            </Text>
          </>
        }
      />
    </Page>
  );
}
