import React from "react";

import metaImage from "public/images/pizza/neapolitan/thumbnails/meta.png";
import heroImage from "public/images/pizza/neapolitan/thumbnails/tall.jpg";

import { Alert } from "components/Alert/Alert";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Link } from "components/Link/Link";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";
import { WindowPaneTest } from "components/WindowPaneTest/WindowPaneTest";

const INGREDIENTS = [
  {
    value: 166,
    label: "Flour (Tipo 00)",
    isFlour: true,
  },
  {
    value: 103,
    label: "Water",
    isWater: true,
  },
  {
    value: 5,
    label: "Salt",
  },
  {
    value: 1,
    label: "Dry yeast",
  },
];

const STEPS = [
  <Text>
    In a container, <b>mix all the dry ingredients</b> (Tipo 00, salt, yeast).
    After that add <b>the water</b>. Give it a quick mix with a spoon or your
    hands until everything is combined.
  </Text>,
  <Text extra={<WindowPaneTest />}>
    Start <b>kneading the dough</b>. <br />
    <br /> If you have a stand mixer mix it for 3 minutes on low speed to
    combine the dough, and then 5 minutes on medium to develop gluten strength.{" "}
    <br />
    <br />
    If you knead by hand, knead for 10 minutes.
  </Text>,
  <Text>
    Transfer the dough to a lightly oiled bowl, cover it with a damp towel and
    let it rest in room temperature for <b>30 minutes</b>
  </Text>,
  <Text>
    Time to build some more gluten strength. Wet your hand in some water and
    perform <b>4 stretch & folds</b>. You can see an example how this is done in{" "}
    <Link external href="https://www.youtube.com/watch?v=QYzxulQY1Gc">
      this
    </Link>{" "}
    video.
  </Text>,
  <Text>
    Once again, cover the bowl with a damp towel and let it rest for{" "}
    <b>30 minutes</b>
  </Text>,
  <Text>
    Put the dough on the kitchen counter and <b>divide it into 275g pieces</b>.
  </Text>,
  <Text>
    Shape the doughs into a ball (see example{" "}
    <Link href="https://youtu.be/OjsCEJ8CWlg?t=361" external>
      here
    </Link>
    ) and place each dough ball in a container that is lightly oiled and air
    tight
  </Text>,
  <Text
    extra={
      <Alert
        description={
          <>
            For optimal results I recommend <b>24 hours - 72 hours</b> in the
            fridge. More time equals more flavor
          </>
        }
      />
    }
  >
    Place the containers in the fridge for <b>at least 12 hours</b>.
  </Text>,
  <Text>
    Take out the dough from the fridge between 1-2 hours before baking.
  </Text>,
];

export default function Neapolitan() {
  return (
    <Page
      metaTitle="Neapolitan style pizza dough"
      description="The classic Neapolitan style pizza dough"
      image={metaImage}
    >
      <Post
        title="Neapolitan style pizza dough"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="pizza"
            ingredients={INGREDIENTS}
            recipeTimes={{
              proofTimeInMinutes: 720,
              roomTempTimeInMinutes: 60,
              prepTimeInMinutes: 30,
            }}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              The classic of the classics. The Neapolitan pizza has a thin base
              and a big and chewy crust. This dough should be cold proofed for{" "}
              at least 24 hours for best results.
            </Text>

            <Text variant="ingress">
              Beware, this dough is not suitable for home ovens. While it would
              work, the Neapolitan pizza needs to be cooked in ~90 seconds to
              create the correct texture.
            </Text>

            <Text variant="ingress">
              This dough pairs well with my{" "}
              <Link href="/pizza/neapolitan-style-sauce">Neapolitan style</Link>{" "}
              tomato sauce.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
