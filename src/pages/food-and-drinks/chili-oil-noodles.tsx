import React from "react";

import image1 from "public/images/recipes/chili-oil-noodles/1.png";
import image10 from "public/images/recipes/chili-oil-noodles/10.png";
import image11 from "public/images/recipes/chili-oil-noodles/11.png";
import image12 from "public/images/recipes/chili-oil-noodles/12.png";
import image13 from "public/images/recipes/chili-oil-noodles/13.png";
import image2 from "public/images/recipes/chili-oil-noodles/2.png";
import image3 from "public/images/recipes/chili-oil-noodles/3.png";
import image4 from "public/images/recipes/chili-oil-noodles/4.png";
import image5 from "public/images/recipes/chili-oil-noodles/5.png";
import image6 from "public/images/recipes/chili-oil-noodles/6.png";
import image8 from "public/images/recipes/chili-oil-noodles/8.png";
import image9 from "public/images/recipes/chili-oil-noodles/9.png";
import metaImage from "public/images/recipes/chili-oil-noodles/thumbnails/meta.png";
import heroImage from "public/images/recipes/chili-oil-noodles/thumbnails/tall.png";

import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    label: "Chili oil",
    ingredients: [
      {
        value: 300,
        label: "Vegetable oil",
      },
      {
        value: 70,
        label: "Shallots",
      },
      {
        value: 36,
        label: "Soy sauce",
      },
      {
        value: 35,
        label: "Garlic",
      },
      {
        value: 15,
        label: "Chili flakes",
      },
      {
        value: 11,
        label: "Black pepper corns",
      },
      {
        value: 11,
        label: "Brown sugar",
      },
      {
        value: 6,
        label: "Sichuan pepper",
      },
      {
        value: 5,
        label: "Star anis",
      },
      {
        value: 5,
        label: "MSG",
      },
    ],
  },
  {
    label: "Dish",
    ingredients: [
      {
        value: 99999,
        label: "Udon noodles",
        excludeValue: true,
        valueSuffix: false,
      },
      {
        value: 99999,
        label: "Peanuts",
        excludeValue: true,
        valueSuffix: false,
      },
      {
        value: 99999,
        label: "Scallion",
        excludeValue: true,
        valueSuffix: false,
      },
      {
        value: 99999,
        label: "Fresh chili",
        excludeValue: true,
        valueSuffix: false,
      },
      {
        value: 99999,
        label: "Lime",
        excludeValue: true,
        valueSuffix: false,
      },
    ],
  },
];

const STEPS = [
  <Text extra={<MethodImage src={image1} alt="" />}>
    Start with <b>prepping</b> all the ingredients by measuring them.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image2} alt="" />
        <MethodImage src={image3} alt="" />
      </>
    }
  >
    Take a small piece of cheesecloth and place the <b>black peppercorns</b> and{" "}
    <b>Sichuan peppercorns</b> in the center. Tie it into a sachet using kitchen
    twine.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image4} alt="" />
        <MethodImage src={image5} alt="" />
      </>
    }
  >
    In a small saucepan, combine <b>chili flakes</b>, <b>brown sugar</b>,{" "}
    <b>soy sauce</b>, and <b>MSG</b>. Drop the <b>sachet</b> you made earlier
    into this mix.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image6} alt="" />
      </>
    }
  >
    Peel and finely slice the <b>shallots</b> and <b>garlic</b>. You want them
    pretty thin (0.3mm) so they'll crisp up quickly.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image8} alt="" />
      </>
    }
  >
    Heat some neutral <b>oil</b> (e.g., canola or vegetable oil) in a pan on
    medium heat. Add the sliced <b>shallots</b>, <b>garlic</b>, and{" "}
    <b>star anise</b>. Fry until the shallots and garlic are golden brown. About
    10-12 minutes.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image9} alt="" />
      </>
    }
  >
    Strain the hot <b>oil</b> into the small saucepan containing your chili
    flake mix. Make sure to catch the fried shallots, garlic, and star anise for
    later use.
  </Text>,
  <Text>
    Place the fried <b>shallots</b>, <b>garlic</b>, and <b>star anise</b> on a
    paper towel to drain and cool.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image10} alt="" />
        <MethodImage src={image11} alt="" />
      </>
    }
  >
    Once the fried mix is cooled, <b>crush it into smaller pieces</b> (you can
    use a mortar and pestle or just chop it coarsely). Add it back to the
    saucepan with the oil and spices.
  </Text>,
  <Text>
    Time to start with the actual dish! Finely chop some <b>scallions</b>,{" "}
    <b>chili</b>, and <b>peanuts</b>. Cut a lime into wedges.
  </Text>,
  <Text>
    <b>Boil noodles</b> according to package instructions until al dente. Drain
    and set aside.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image13} alt="" />
        <MethodImage src={heroImage} alt="" />
      </>
    }
  >
    Toss the <b>noodles</b> in the <b>chili oil</b>. Top with the chopped
    scallions, chili, peanuts, and a wedge of lime. Serve immediately.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image12} alt="" />
      </>
    }
  >
    You can store the chili oil in the fridge for a long time, at least a few
    months, so it's a gift that keeps on giving.
  </Text>,
];

export default function ChiliOilNoodles() {
  return (
    <Page
      metaTitle="Chili oil noodles"
      description="This chili oil noodle recipe is a quick and flavorful way to level up your meals. Make your own spicy chili oil with a crispy shallot and garlic kick.  It doesn't just work great on noodles; you can also drizzle it on bread or anything else that needs a flavor boost. Plus, you can store it in the fridge for a long time, so it's a gift that keeps on giving."
      image={metaImage}
    >
      <Post
        title="Chili oil noodles"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            hideWeight
            ingredientSuffix="batch"
            ingredients={INGREDIENTS}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              This recipe is a quick and flavorful way to level up your meals.
              Make your own spicy chili oil with a crispy shallot and garlic
              kick!
            </Text>
            <Text variant="ingress">
              It doesn't just work great on noodles; you can also drizzle it on
              bread or anything else that needs a flavor boost. Plus, you can
              store it in the fridge for a long time, so it's a gift that keeps
              on giving.
            </Text>
          </>
        }
      />
    </Page>
  );
}
