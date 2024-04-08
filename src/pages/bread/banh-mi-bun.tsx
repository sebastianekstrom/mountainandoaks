import React from "react";

import image1 from "public/images/bread/banh-mi-bun/1.jpg";
import image2 from "public/images/bread/banh-mi-bun/2.jpg";
import image3 from "public/images/bread/banh-mi-bun/3.jpg";
import image4 from "public/images/bread/banh-mi-bun/4.jpg";
import image5 from "public/images/bread/banh-mi-bun/5.jpg";
import image6 from "public/images/bread/banh-mi-bun/6.jpg";
import image7 from "public/images/bread/banh-mi-bun/7.jpg";
import image8 from "public/images/bread/banh-mi-bun/8.jpg";
import image9 from "public/images/bread/banh-mi-bun/9.jpg";
import finalBread from "public/images/bread/banh-mi-bun/final-bread.png";
import finalImage from "public/images/bread/banh-mi-bun/final.png";
import metaImage from "public/images/bread/banh-mi-bun/thumbnails/meta.png";
import heroImage from "public/images/bread/banh-mi-bun/thumbnails/tall.png";

import { Alert } from "components/Alert/Alert";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { PokeTest } from "components/PokeTest/PokeTest";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    value: 83.33,
    label: "Bread flour (12% protein)",
    isFlour: true,
  },
  {
    value: 43.3333333333,
    label: "Water",
    isWater: true,
  },
  {
    value: 10,
    label: "Egg",
    tooltip: "1 egg ≈ 60g",
  },
  {
    value: 5,
    label: "Butter",
  },
  {
    value: 1.5,
    label: "Salt",
  },
  {
    value: 1.1666666667,
    label: "Yeast",
  },
  {
    value: 0.8333333333,
    label: "Dough conditioner (optional)",
  },
  {
    value: 1,
    label: "Sugar",
  },
  {
    value: 1,
    label: "Melted butter",
    tooltip: "Used to brush the finished bread",
    valueSuffix: false,
    excludeValue: true,
  },
];

const STEPS = [
  <Text>
    Start by <b>melting the butter</b> over low heat in a small saucepan, being
    careful not to let it brown. Once fully melted, remove it from the heat and
    set it aside to cool.
  </Text>,
  <Text extra={<MethodImage src={image1} alt="" />}>
    In a mixing bowl, combine all the <b>dry ingredients</b> (flour, salt,
    yeast, dough conditioner, sugar). Use a whisk or a spoon to thoroughly mix
    them together.
  </Text>,
  <Text extra={<MethodImage src={image2} alt="" />}>
    Add all the <b>wet ingredients</b> (water, egg, melted butter).
  </Text>,
  <Text>
    Attach a dough hook to your mixer and start mixing on low speed for{" "}
    <b>1-2 minutes</b> to combine everything.
  </Text>,
  <Text>
    Increase the mixer's speed to medium/high. Continue mixing for{" "}
    <b>8-10 minutes</b> until the dough becomes smooth.
  </Text>,
  <Text>
    Prepare <b>another bowl by lightly coating it with oil</b>. The oil prevents
    the dough from sticking during the rising process.
  </Text>,
  <Text extra={<MethodImage src={image3} alt="" />}>
    Using your hands, or a dough scraper, <b>gently shape the dough</b> into a
    smooth ball. Place this dough ball into the oiled bowl, lightly coating the
    top with a bit more oil to prevent it from drying out. Cover the bowl
    tightly with plastic wrap.
  </Text>,
  <Text>
    Let the dough proof in room temperature until it doubles in size. This could
    take anywhere from <b>30-60 minutes</b>, depending on the temperature.
  </Text>,
  <Text extra={<MethodImage src={image4} alt="" />}>
    Once the dough has risen, <b>lightly grease your working surface</b> with
    some oil. Carefully turn the dough out onto this surface.
  </Text>,
  <Text extra={<MethodImage src={image5} alt="" />}>
    Divide the dough, each dough ball weighing about <b>135 grams</b>.
  </Text>,
  <Text extra={<MethodImage src={image6} alt="" />}>
    To <b>shape the dough</b>, slap the dough on the working surface, thus
    removing large gas bubbles. Do this one or two times until the dough gets a
    long rectangular shape, continue to press with your fingers until it's a
    flat rectangle.
  </Text>,
  <Text extra={<MethodImage src={image7} alt="" />}>
    Then, fold the dough over itself while pressing it backwards with your
    fingers. Keep doing this until it's completely folded and resembles a
    baguette shape.
  </Text>,
  <Text extra={<MethodImage src={image8} alt="" />}>
    Arrange the shaped dough balls onto a <b>baguette tray</b>. You can fit 6
    baguettes into one tray.
  </Text>,
  <Text>
    Lightly <b>coat the top of each dough ball with a bit more oil</b> to
    prevent them from drying out.
  </Text>,
  <Text extra={<PokeTest />}>
    Cover the dough balls with a damp kitchen towel, and let them proof for
    about <b>60 minutes</b>.
  </Text>,
  <Text>
    As the dough proofs, <b>place a tray of water</b> in the bottom of your
    oven. This will create steam during baking, helping the bread develop a nice
    crust.
  </Text>,
  <Text>
    Preheat your oven to <b>210°C/410°F</b>
  </Text>,
  <Text>
    Remove the kitchen towels covering the dough and{" "}
    <b>lightly spray the dough</b> with water. This helps keep the dough moist
    and promotes oven spring.
  </Text>,
  <Text extra={<MethodImage src={image9} alt="" />}>
    Using a razor blade, <b>score the top of the bread</b>, making cuts about
    3-4mm deep. This allows the bread to expand during baking.
  </Text>,
  <Text
    extra={
      <Alert
        title="Don't overcook it"
        description={
          <>
            The Bánh mì should have a soft, slightly golden, crust. Don't bake
            it for too long!
          </>
        }
      />
    }
  >
    Bake the bread for about <b>22-25 minutes</b>, or until they're lightly
    golden brown and sound hollow when tapped on the bottom.
  </Text>,
  <Text>
    After <b>3 minutes into the baking process</b>, quickly open the oven and
    spray some more water onto the bread.
  </Text>,
  <Text>
    About <b>15 minutes into the bake</b>, remove the water tray from the oven.
    Continue baking until the bread is done.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={finalBread} alt="" />
        <MethodImage src={finalImage} alt="" />
      </>
    }
  >
    Take the bread out and let it chill for a bit on a cooling rack. After 5-10
    minutes brush the bread with some <b>melted butter</b>. Let cool another{" "}
    <b>20-30 minutes</b> before devouring it.
  </Text>,
];

export default function BanhMi() {
  return (
    <Page
      metaTitle="Bánh mì bun"
      description="This iconic Vietnamese bread is known for its fluffy interior and thin, soft crust, perfect for loading up with chicken or pork, pickled carrots and daikon, pâté, chili, and cucumber."
      image={metaImage}
    >
      <Post
        title="Bánh mì bun"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="bun"
            startingMultiplier={6}
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
              This iconic Vietnamese bread is known for its fluffy interior and
              thin, soft crust, perfect for loading up with chicken or pork,
              pickled carrots and daikon, pâté, chili, and cucumber.
            </Text>
            <Text variant="ingress">
              While it takes a few steps to make, the deliciously rewarding
              result is absolutely worth the effort!
            </Text>
          </>
        }
      />
    </Page>
  );
}
