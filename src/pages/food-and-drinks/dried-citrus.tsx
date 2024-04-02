import React from "react";

import image1 from "public/images/recipes/dried-citrus/citrus-1.jpg";
import image2 from "public/images/recipes/dried-citrus/citrus-2.jpg";
import image3 from "public/images/recipes/dried-citrus/citrus-3.jpg";
import image4 from "public/images/recipes/dried-citrus/citrus-4.jpg";
import metaImage from "public/images/recipes/dried-citrus/thumbnails/meta.png";
import heroImage from "public/images/recipes/dried-citrus/thumbnails/tall.jpg";

import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    value: 4,
    label: "Citruses of your choice",
    valueSuffix: false,
  },
];

const STEPS = [
  <Text>
    Preheat the oven to <b>100°C/212°F</b>.
  </Text>,
  <Text extra={<MethodImage src={image1} alt="" />}>
    Slice the citrus fruit into thin rounds, about 3mm/0.1 inch thick. Don't
    worry about making them perfect.
  </Text>,
  <Text>Line a baking sheet with parchment paper.</Text>,
  <Text extra={<MethodImage src={image2} alt="" />}>
    Place the citrus slices on the prepared baking sheet.
  </Text>,
  <Text>
    Bake for 1 hour, then take out the baking sheet from the oven and flip the
    slices.
  </Text>,
  <Text>
    Return the baking sheet to the oven and bake for an additional 1-2 hours, or
    until the slices are completely dry.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image3} alt="" />
        <MethodImage src={image4} alt="" />
      </>
    }
  >
    Let the slices cool, then store them in an airtight container.
  </Text>,
];

export default function DriedCitrus() {
  return (
    <Page
      metaTitle="Dried citrus"
      description="Take your cocktails to the next level with a touch of natural elegance! Dried limes, lemon, or blood oranges are the perfect addition to your drink, adding both a burst of color and a zesty pop of flavor. This simple technique is a surefire way to impress your guests and make your drinks truly stand out."
      image={metaImage}
    >
      <Post
        title="Dried citrus"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="batch"
            ingredients={INGREDIENTS}
            excludeWeight
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              Take your cocktails to the next level with a touch of natural
              elegance! Dried limes, lemon, or blood oranges are the perfect
              addition to your drink, adding both a burst of color and a zesty
              pop of flavor. This simple technique is a surefire way to impress
              your guests and make your drinks stand out.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
