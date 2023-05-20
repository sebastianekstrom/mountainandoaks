import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Link from "components/Link";
import Text from "components/Text";
import Ingredients from "components/Ingredients";
import MethodImage from "components/MethodImage";
import WindowPaneTest from "components/WindowPaneTest";
import PokeTest from "components/PokeTest";

import heroImage from "public/images/bread/baguette/thumbnails/tall.jpg";
import metaImage from "public/images/bread/baguette/thumbnails/meta.png";
import image1 from "public/images/bread/baguette/1.png";
import image2 from "public/images/bread/baguette/2.png";
import image3 from "public/images/bread/baguette/3.png";
import image4 from "public/images/bread/baguette/4.png";
import image5 from "public/images/bread/baguette/5.png";
import image6 from "public/images/bread/baguette/6.png";
import image7 from "public/images/bread/baguette/7.png";

import Method from "components/Method";

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
    label: "Day 1 - Poolish making time",
    steps: [
      <Text>
        Mix the all the ingredients for the <b>poolish</b> in a bowl
      </Text>,
      <Text>
        Put the dough on your kitchen counter and knead it with your hands until
        its combined, around <b>3-5 minutes</b>
      </Text>,
      <Text>
        Put in a lightly oiled bowl and store in the fridge for <b>12h-24h</b>
      </Text>,
    ],
  },
  {
    label: "Day 2 - Baguette making time",
    steps: [
      <Text>
        Take the <b>poolish</b> out of the fridge
      </Text>,
      <Text extra={<MethodImage src={image1} alt="" />}>
        In a new bowl combine all the dry ingredients (flour, salt, yeast) and
        give it a quicks stir to combine. After that add the water
      </Text>,
      <Text extra={<MethodImage src={image2} alt="" />}>
        Tear the poolish into small pieces
      </Text>,
      <Text extra={<WindowPaneTest />}>
        Start kneading the dough and piece by piece{" "}
        <b>incorporate the poolish</b>
        <br />
        <br />
        If you have a stand mixer mix for 2 min on low speed to combine the
        dough, and then 8 minutes on medium to develop gluten strength. If you
        knead by hand, knead for at least 10 minutes <br />
      </Text>,
      <Text>
        Cover the dough with a damp towel and let it proof in room temperature
        for <b>1-2 hours</b> or until it has doubled in size
      </Text>,
      <Text>
        Once the dough is proofed, lightly punch the dough to knock out all the
        air and <b>divide it into 260g pieces</b>
      </Text>,
      <Text extra={<MethodImage src={image3} alt="" />}>
        <Link href="https://youtu.be/n0U8RdRdFDU?t=633" external>
          Pre shape
        </Link>{" "}
        each ball and let it rest for 10min - 15min. It's also time to start pre
        heating your oven, so set it to <b>240°C / 465°F</b>
      </Text>,
      <Text extra={<MethodImage src={image4} alt="" />}>
        Make the{" "}
        <Link href="https://youtu.be/n0U8RdRdFDU?t=716" external>
          final shape
        </Link>{" "}
        which is similar to the pre shape, but with the extra step of kneading
        it to a baguette shape
      </Text>,
      <Text extra={<PokeTest />}>
        Cover with a towel and let it proof for another <b>30min - 60min</b>
      </Text>,
      <Text>
        We need to create steam in the oven to help the bread rise, so start
        boiling some water (around 1000g gram) and place an oven proof container
        at the bottom of the oven
      </Text>,
      <Text extra={<MethodImage src={image5} alt="" />}>
        Score the dough by making three <em>straight</em> lines with some
        offset, as visualized by the red lines below, and place them on a baking
        tray
      </Text>,
      <Text>
        Put the oven tray in the oven, and immediately pour the boiling water
        into the container at the bottom of the oven
      </Text>,
      <Text
        extra={
          <>
            <MethodImage src={image6} alt="" />
            <MethodImage src={image7} alt="" />
          </>
        }
      >
        After <b>20min - 25min</b> in the oven the bread is done! Make sure to
        let it rest for <em>at least</em> 30 minutes after taking it out of the
        oven. If you cut it straight away all the moisture will evaporate and
        the bread will become dry.
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
