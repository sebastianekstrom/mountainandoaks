import React from "react";

import metaImage from "public/images/pizza/ny-sauce/thumbnails/meta.png";
import heroImage from "public/images/pizza/ny-sauce/thumbnails/tall.png";

import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Link } from "components/Link/Link";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    value: 400,
    label: "Canned tomatoes",
  },
  {
    value: 50,
    label: "Tomato paste or tomato purée",
  },
  {
    value: 8,
    label: "Salt",
  },
  {
    value: 1.5,
    label: "Onion powder",
  },
  {
    value: 1.5,
    label: "Garlic powder",
  },
  {
    value: 1,
    label: "Dried basil",
  },
  {
    value: 0.5,
    label: "Chili flakes",
  },
  {
    value: 0.5,
    label: "Dried oregano",
  },
];

const STEPS = [
  <Text>
    Add all the ingredients in a container and mix it until it's smooth
  </Text>,
  <Text>
    For best result, keep it in the fridge for a few hours to let it developer
    more flavor. But you can definitely use it right away!
  </Text>,
];

export default function NewYorkStyleSauce() {
  return (
    <Page
      metaTitle="New York style pizza sauce"
      description="The ultimate pizza sauce for a New York style pizza"
      image={metaImage}
    >
      <Post
        title="New York style pizza sauce"
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
              This tomato sauce is quite salty to balance the sweetness of the{" "}
              <Link href="/pizza/new-york-style">
                New York Style pizza dough
              </Link>
              , if you’re using another dough recipe I would recommend reducing
              the salt with 2-3 grams.
            </Text>
            <Text variant="ingress">
              If possible you should buy a can of whole (not crushed) tomatoes,
              preferably San Marzano ones. A regular old can of crushed tomatoes
              will definitely do the trick, but really good ones are still
              relatively cheap and can be found in most supermarkets.
            </Text>
            <Text variant="ingress">
              This tomato sauce is not cooked beforehand, but instead gets
              cooked while baking the pizza. I think pre cooking the sauce
              develops too much flavor and makes it more intense than it needs
              to be.
            </Text>
          </>
        }
      />
    </Page>
  );
}
