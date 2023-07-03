import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Text from "components/Text";
import Ingredients from "components/Ingredients";
import Badge from "components/Badge";
import MethodImage from "components/MethodImage";

import heroImage from "public/images/recipes/jalapeno-dip/thumbnails/tall.png";
import metaImage from "public/images/recipes/jalapeno-dip/thumbnails/meta.png";
import image1 from "public/images/recipes/jalapeno-dip/1.png";
import image2 from "public/images/recipes/jalapeno-dip/2.png";
import image3 from "public/images/recipes/jalapeno-dip/3.png";
import Method from "components/Method";

const INGREDIENTS = [
  {
    value: 100,
    label: "Mayonnaise",
  },
  {
    value: 40,
    label: "Sour cream",
  },
  {
    value: 17,
    label: "Pickled jalapeño",
  },
  {
    value: 13,
    label: "Baby spinach",
  },
  {
    value: 6,
    label: "Lime juice",
  },
  {
    value: 5,
    label: "Cilantro (optional)",
  },
  {
    value: 3,
    label: "Garlic",
  },
  {
    value: 1.5,
    label: "Sugar",
  },
  {
    value: 0,
    label: "Salt",
    valueSuffix: false,
    excludeValue: true,
  },
];

const STEPS = [
  <Text extra={<MethodImage src={image1} alt="" />}>
    Start by prepping all the ingredients.
  </Text>,
  <Text extra={<MethodImage src={image2} alt="" />}>
    Using a blender or immersion blender, blend the ingredients together until
    you achieve a <b>smooth texture</b>.
  </Text>,
  <Text>
    Season the dip with <b>salt</b>, according to your taste preferences.
    <br />
    <br />
    Perhaps it might need a bit more acid (lime juice), or heat (jalapeño), be
    sure to <b>taste and adjust as needed</b>.
  </Text>,
  <Text extra={<MethodImage src={image3} alt="" />}>
    Use right away, or store in the fridge to develop more flavor
  </Text>,
];

export default function JalapenoDip() {
  return (
    <Page
      metaTitle="Jalapeño dip"
      description="This dip, with its zesty jalapeño and hint of garlic, is the perfect spicy, creamy addition to your tacos and nachos. Or any snack craving a little heat."
      image={metaImage}
    >
      <Post
        title="Jalapeño dip"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="batch"
            ingredients={INGREDIENTS}
            additionalMeta={<Badge value="15min" label="Prep time" />}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              This dip, with its zesty jalapeño and hint of garlic, is the
              perfect spicy, creamy addition to your tacos and nachos. Or any
              snack craving a little heat.
            </Text>
            <Text variant="ingress">
              While cilantro adds a distinct freshness to this dip, it's not for
              everyone. If you choose to omit it, add a little extra baby
              spinach to keep the dip's texture and color balance.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
