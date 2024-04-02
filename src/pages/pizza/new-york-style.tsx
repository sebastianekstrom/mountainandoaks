import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Link } from "components/Link/Link";
import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Alert } from "components/Alert/Alert";
import { WindowPaneTest } from "components/WindowPaneTest/WindowPaneTest";

import heroImage from "public/images/pizza/ny-style/thumbnails/tall.jpg";
import metaImage from "public/images/pizza/ny-style/thumbnails/meta.png";
import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    value: 170,
    label: "Flour (Tipo 00)",
    isFlour: true,
  },
  {
    value: 105,
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
  {
    value: 2,
    label: "Dry yeast",
  },
];

const STEPS = [
  <Text>
    In a container, <b>combine all the dry ingredients</b> (Tipo 00, sugar,
    salt, yeast). Then <b>add the wet ingredients</b> (water, olive oil). Mix
    everything quickly with a spoon or your hands until combined.
  </Text>,
  <Text extra={<WindowPaneTest />}>
    Knead the dough. If using a stand mixer, mix for 3 minutes on low speed to
    combine the dough, then 5 minutes on medium to develop gluten strength. If
    kneading by hand, knead for 10 minutes.
  </Text>,
  <Text>
    Put the dough in a lightly oiled bowl, cover with a damp towel, and let it
    rest at room temperature for <b>30 minutes</b>.
  </Text>,
  <Text>
    Time to build some more gluten strength. Wet your hand in some water and
    perform <b>4 stretch & folds</b>. <br />
    You can see an example how this is done in{" "}
    <Link external href="https://www.youtube.com/watch?v=QYzxulQY1Gc">
      this video.
    </Link>{" "}
  </Text>,
  <Text>
    Cover the bowl with a damp towel again and let it rest for another{" "}
    <b>30 minutes</b>.
  </Text>,
  <Text
    extra={
      <Alert
        description={
          <>
            I usually go for 280g to get the classic smaller crust of the New
            York style pizza
          </>
        }
      />
    }
  >
    Put the dough on the kitchen counter and{" "}
    <b>divide it into 280g-300g pieces</b>.
  </Text>,
  <Text>
    Shape the doughs into a ball (
    <Link href="https://youtu.be/OjsCEJ8CWlg?t=361" external>
      see example here
    </Link>
    ) and place each dough ball in a container that is lightly oiled and air
    tight
  </Text>,
  <Text>
    Place the containers in the fridge for <b>at least four hours</b>. <br />{" "}
    For optimal results I recommend <b>24 hours - 72 hours</b>. More time equals
    more flavor
  </Text>,
  <Text>
    Take out the dough from the fridge <b>one hour before baking</b>. For best
    results in a home oven, please see my guide on{" "}
    <Link href="/guides/baking-pizza-in-home-oven">
      how to bake pizza in a home oven
    </Link>
  </Text>,
];

export default function NewYorkStyle() {
  return (
    <Page
      metaTitle="New York style pizza"
      description="The classic New York style pizza dough"
      image={metaImage}
    >
      <Post
        title="New York style pizza dough"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="pizza"
            ingredients={INGREDIENTS}
            recipeTimes={{
              proofTimeInMinutes: 240,
              roomTempTimeInMinutes: 60,
              prepTimeInMinutes: 30,
            }}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              This New York-style pizza is all about that super crispy crust and
              crazy thin bottom. A bit of sugar makes it a tad sweeter than
              Neapolitan or Roman pizzas, and olive oil really pumps up the
              crust's color and feel. The dough is quite forgiving and it’s
              optimal for baking in your home oven.
            </Text>

            <Text variant="ingress">
              This dough pairs very well with my{" "}
              <Link href="/pizza/new-york-style-sauce">
                New York Style pizza sauce
              </Link>
              , and for instructions on how to bake it please see my guide on
              how to{" "}
              <Link href="/guides/baking-pizza-in-home-oven">
                bake pizza in a home oven
              </Link>
              .
            </Text>

            <Text variant="ingress">
              Wanna level up the flavor? Let the dough hang out in the fridge
              for at least 24 hours—trust me, it's worth it!
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
