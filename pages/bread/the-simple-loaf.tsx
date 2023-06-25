import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Link from "components/Link";
import Text from "components/Text";
import Ingredients from "components/Ingredients";
import WindowPaneTest from "components/WindowPaneTest";
import PokeTest from "components/PokeTest";

import heroImage from "public/images/bread/the-simple-loaf/thumbnails/tall.png";
import metaImage from "public/images/bread/the-simple-loaf/thumbnails/meta.png";
import image1 from "public/images/bread/the-simple-loaf/1.png";
import Method from "components/Method";
import MethodImage from "components/MethodImage";

const INGREDIENTS = [
  {
    value: 408,
    label: "Bread flour",
    isFlour: true,
  },
  {
    value: 268,
    label: "Water",
    isWater: true,
  },
  {
    value: 5,
    label: "Instant yeast",
  },
  {
    value: 11,
    label: "Salt",
  },
  {
    value: 13,
    label: "Olive oil",
  },
];

const STEPS = [
  <Text>Mix the dry ingredients (flour, yeast and salt) in a bowl</Text>,
  <Text>
    Add the liquids (water, olive oil) to the bowl and give it a quick mix with
    your hands or a spatula
  </Text>,
  <Text extra={<WindowPaneTest />}>
    Start kneading the dough. If you have a stand mixer mix it for 3 minutes on
    low speed to combine the dough, and then 5 minutes on medium to develop
    gluten strength. If you knead by hand, knead for 10 minutes. <br />
  </Text>,
  <Text>
    Grab your dutch oven and put it in the oven and set it to <b>250°C/482°F</b>
    . If you don't have a dutch oven use a baking sheet. I do however highly
    recommend getting one, you can read more about the benefits of a dutch oven{" "}
    <Link href="techniques/gear-for-baking">here</Link>
  </Text>,
  <Text>
    Cover the bowl with a damp towel or plastic wrap and let it proof for{" "}
    <b>60 minutes</b>
  </Text>,
  <Text>
    Put the dough on your kitchen counter and{" "}
    <Link href="https://youtu.be/n0U8RdRdFDU?t=633" external>
      pre shape
    </Link>{" "}
    it
  </Text>,
  <Text extra={<PokeTest />}>
    Time for the final proof, cover the dough with a damp towel and let it proof
    for <b>30 minutes</b>
  </Text>,
  <Text>
    Make the{" "}
    <Link href="https://youtu.be/n0U8RdRdFDU?t=716" external>
      final shape
    </Link>
  </Text>,
  <Text>
    Place the dough on a piece of parchment paper to prevent it from sticking.
    Take out your dutch oven, or baking sheet, out from the oven and place the
    dough on it
  </Text>,
  <Text>
    <b>Score the bread</b> with a razor blade or a really sharp knife. This is
    because we want to control the rise of the bread. If you don't score it the
    bread might &quot;explode&quot; on the sides which means we won't get a good
    rise. You can watch{" "}
    <Link href="https://youtu.be/wfoC-daJq8E?t=192">this video</Link> for some
    good scoring techniques
  </Text>,
  <Text>
    If you're using a dutch oven, cover it with the lid and place it in the
    oven. If you're using a baking sheet, spray the dough with a tiny bit of
    water and place it in the oven. The spray of water will prevent the crust
    from forming too quickly, thus allowing the bread to rise
  </Text>,
  <Text>
    As soon as the bread is in the oven, lower the temperature to{" "}
    <b>220°C / 428°F</b>
  </Text>,
  <Text>
    After <b>20 minutes</b> remove the lid from the dutch oven, if you're using
    one
  </Text>,
  <Text>
    Bake for <b>20 more minutes</b> until the crust is golden brown
  </Text>,
  <Text extra={<MethodImage src={image1} alt="" />}>
    All done, take out the bread from the oven and place it on a cooling rack.
    Let it rest for at least <b>30 minutes</b>
  </Text>,
];

export default function SimpleLoaf() {
  return (
    <Page
      metaTitle="The simple loaf"
      description="A quick and simple loaf of bread"
      image={metaImage}
    >
      <Post
        title="The simple loaf"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="loaf"
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
          <Text variant="ingress">
            A basic, simple and delicious loaf of bread that only takes around
            2-3 hours to bake! The hydration is relatively low which makes it
            easy to handle, but high enough to produce a juicy and delicious
            loaf.
          </Text>
        }
      ></Post>
    </Page>
  );
}
