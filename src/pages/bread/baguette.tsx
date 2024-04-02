import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Link } from "components/Link/Link";
import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";
import { MethodImage } from "components/MethodImage/MethodImage";
import { WindowPaneTest } from "components/WindowPaneTest/WindowPaneTest";
import { PokeTest } from "components/PokeTest/PokeTest";

import heroImage from "public/images/bread/baguette/thumbnails/tall.jpg";
import metaImage from "public/images/bread/baguette/thumbnails/meta.png";
import image1 from "public/images/bread/baguette/1.png";
import image2 from "public/images/bread/baguette/2.png";
import image3 from "public/images/bread/baguette/3.png";
import image4 from "public/images/bread/baguette/4.png";
import image5 from "public/images/bread/baguette/5.png";
import image6 from "public/images/bread/baguette/6.png";
import image7 from "public/images/bread/baguette/7.png";

import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    label: "Poolish",
    ingredients: [
      {
        value: 75,
        label: "Bread flour",
        isFlour: true,
      },
      {
        value: 48,
        label: "Water",
        isWater: true,
      },
      {
        value: 1.1,
        label: "Salt",
      },
      {
        value: 0.4,
        label: "Dried yeast",
      },
    ],
  },
  {
    label: "Dough",
    ingredients: [
      {
        value: 83,
        label: "Bread flour",
        isFlour: true,
      },
      {
        value: 50,
        label: "Water",
        isWater: true,
      },
      {
        value: 1.6,
        label: "Salt",
      },
      {
        value: 0.8,
        label: "Dried yeast",
      },
    ],
  },
];

const STEPS = [
  {
    label: "Day 1 - Preparing the poolish",
    steps: [
      <Text>
        Combine all the ingredients for the <b>poolish</b> in a bowl.
      </Text>,
      <Text>
        Turn the dough mixture out onto your kitchen counter and knead with your
        hands until it's thoroughly combined, about <b>3-5 minutes</b>.
      </Text>,
      <Text>
        Transfer the dough back into the bowl, cover it with plastic wrap and
        refrigerate for <b>12-24 hours</b>.
      </Text>,
    ],
  },
  {
    label: "Day 2 - Baguette making time",
    steps: [
      <Text>
        Remove the <b>poolish</b> from the refrigerator.
      </Text>,
      <Text extra={<MethodImage src={image1} alt="" />}>
        In a separate bowl, combine all the dry ingredients (<b>flour</b>,{" "}
        <b>salt</b>,<b>yeast</b>), and give them a quick stir for an even mix.
        Then, add the water.
      </Text>,
      <Text extra={<MethodImage src={image2} alt="" />}>
        <b>Tear the poolish</b> into small, manageable pieces.
      </Text>,
      <Text extra={<WindowPaneTest />}>
        Begin kneading the dough, incorporating the poolish pieces gradually
        until fully combined.
        <br />
        <br />
        If you're using a stand mixer, mix the dough for{" "}
        <b>2 minutes on low speed</b> to combine, and then for{" "}
        <b>8 minutes on medium</b> to develop gluten strength. If you're
        kneading by hand, knead for at least 10 minutes.
      </Text>,
      <Text>
        Cover the dough with a damp towel and allow it to proof at room
        temperature for <b>1-2 hours</b>, or until it has doubled in size.
      </Text>,
      <Text>
        Once the dough has proofed, gently deflate the dough to knock out the
        air, and divide it into <b>260g pieces</b>.
      </Text>,
      <Text extra={<MethodImage src={image3} alt="" />}>
        <Link href="https://www.youtube.com/shorts/AdO7ZQjQfEo" external>
          Pre-shape
        </Link>{" "}
        each dough ball and let them rest for 10-15 minutes. Meanwhile,{" "}
        <b>preheat your oven</b> to 240°C / 465°F.
      </Text>,
      <Text extra={<MethodImage src={image4} alt="" />}>
        Make the{" "}
        <Link href="https://www.youtube.com/shorts/WweHpLyWssQ" external>
          final shape
        </Link>{" "}
        which is exactly like the pre-shape, but with the extra step of kneading
        it to a baguette shape.
      </Text>,
      <Text extra={<PokeTest />}>
        Cover the baguettes with a damp towel and let them proof for another{" "}
        <b>30-60 minutes</b>.
      </Text>,
      <Text>
        To create steam in the oven (which helps the bread rise), start boiling
        about 1000g of water. Place an ovenproof container at the bottom of the
        oven.
      </Text>,
      <Text extra={<MethodImage src={image5} alt="" />}>
        <b>Score the dough</b> by making three parallel slashes across the top
        of each baguette.
      </Text>,
      <Text>
        Position the baguettes on a baking tray, place the tray in the oven, and
        immediately pour the boiling water into the container at the bottom of
        the oven.
      </Text>,
      <Text
        extra={
          <>
            <MethodImage src={image6} alt="" />
            <MethodImage src={image7} alt="" />
          </>
        }
      >
        After <b>20-25 minutes</b> in the oven, the baguettes should be done.
        Allow them to rest for at least 30 minutes after removing them from the
        oven. Cutting into the baguette too soon could cause it to lose moisture
        and become dry. Enjoy your homemade baguettes!
      </Text>,
    ],
  },
];

export default function Baguette() {
  return (
    <Page
      metaTitle="Baguette"
      description="The classic baguette made with poolish"
      image={metaImage}
    >
      <Post
        title="Baguette"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="loaf"
            ingredients={INGREDIENTS}
            recipeTimes={{
              proofTimeInMinutes: 840,
              roomTempTimeInMinutes: 60,
              prepTimeInMinutes: 30,
            }}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <Text variant="ingress">
            This recipe will produce a light and fluffy baguette with a semi
            open crumb. Baguettes are one of the trickier breads to make due to
            the shaping, but it's really fun and with practice it gets easier.
          </Text>
        }
      ></Post>
    </Page>
  );
}
