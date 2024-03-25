import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Text from "components/Text";
import Ingredients from "components/Ingredients";
import PokeTest from "components/PokeTest";

import heroImage from "public/images/bread/cheesy-bread-rolls/thumbnails/tall.png";
import metaImage from "public/images/bread/cheesy-bread-rolls/thumbnails/meta.png";
import image1 from "public/images/bread/cheesy-bread-rolls/image-1.png";
import image2 from "public/images/bread/cheesy-bread-rolls/image-2.png";
import image3 from "public/images/bread/cheesy-bread-rolls/image-3.png";
import Method from "components/Method";
import WindowPaneTest from "components/WindowPaneTest";
import MethodImage from "components/MethodImage";

const INGREDIENTS = [
  {
    value: 43.33333,
    label: "Manitoba flour",
    isFlour: true,
  },
  {
    value: 24.33333,
    label: "Water",
    isWater: true,
  },
  {
    value: 4,
    label: "Egg",
    tooltip: "1 egg ≈ 60g",
  },
  {
    value: 1.5,
    label: "Dry yeast",
  },
  {
    value: 1,
    label: "Salt",
  },
  {
    value: 0.8333333333,
    label: "Sugar",
  },
  {
    value: 0.8333333333,
    label: "Butter",
  },
  {
    value: 1,
    label: "Slices of cheese",
    valueSuffix: false,
  },
];

const STEPS = [
  <Text
    extra={
      <>
        <WindowPaneTest />
      </>
    }
  >
    Combine all ingredients in a mixing bowl. Use a dough hook and mix on medium
    speed for <b>10-13 minutes</b>.
  </Text>,
  <Text>
    Line a <b>baking sheet</b> with parchment paper.
  </Text>,
  <Text>
    Divide the dough into approximately <b>70-gram pieces</b>.
  </Text>,
  <Text extra={<MethodImage src={image3} alt="" />}>
    To <b>shape the dough</b>, place your hand over it in a claw-like form. Move
    your hand in circular motions, initially pressing firmly to shape the dough,
    then gradually reducing pressure to tighten and smooth the surface.
    <br />
    <br />
    Place each piece on the prepared baking sheet, ensuring enough space between
    them for proofing; they will roughly double in size.
  </Text>,
  <Text extra={<MethodImage src={image2} alt="" />}>
    Once all pieces are shaped, lightly mist them with water and{" "}
    <b>cover with a damp towel</b>.
  </Text>,
  <Text>
    Preheat the oven to <b>260°C / 500°F</b>.
  </Text>,
  <Text extra={<PokeTest />}>
    Allow the dough to <b>proof for about 60 minutes</b>.
  </Text>,
  <Text>
    Top each bun with a slice of <b>cheese</b>, or make it two, why not.
  </Text>,
  <Text>
    Transfer the <b>baking tray to the oven</b> and immediately{" "}
    <b>reduce the temperature</b> to 240°C / 464°F.
  </Text>,
  <Text extra={<MethodImage src={image1} alt="" />}>
    Bake until golden brown, approximately <b>10-14 minutes</b>.
    <br />
    <br />
    Enjoy!
  </Text>,
];

export default function CheesyBreadRolls() {
  return (
    <Page
      metaTitle="Cheesy bread rolls"
      description="Made with Manitoba flour, these rolls combine a chewy interior with a crispy cheese topping. Ideal for a sandwich that's satisfyingly cheesy and crunchy."
      image={metaImage}
    >
      <Post
        title="Cheesy bread rolls"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="bun"
            ingredients={INGREDIENTS}
            startingMultiplier={6}
            recipeTimes={{
              proofTimeInMinutes: 60,
              prepTimeInMinutes: 30,
            }}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              Made with Manitoba flour, these rolls combine a chewy interior
              with a crispy cheese topping. Ideal for a sandwich that's
              satisfyingly cheesy and crunchy.
            </Text>
            <Text variant="ingress">
              Manitoba flour is a high-protein, strong flour, perfect for
              creating chewy, well-structured rolls. It gives the dough
              elasticity and strength. If it's not available, regular bread
              flour is a fine substitute.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
