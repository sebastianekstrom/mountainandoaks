import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Link } from "components/Link/Link";
import { Text } from "components/Text/Text";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Badge } from "components/Badge/Badge";

import heroImage from "public/images/pizza/neapolitan-sauce/thumbnails/tall.jpg";
import metaImage from "public/images/pizza/neapolitan-sauce/thumbnails/meta.png";
import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    value: 400,
    label: "Canned San Marzano tomatoes",
  },
  {
    value: 15,
    label: "Olive oil",
  },
  {
    value: 4.5,
    label: "Sugar",
  },
  {
    value: 4.5,
    label: "Salt",
  },
  {
    value: 10,
    label: "Leaves of fresh basil",
    valueSuffix: false,
  },
  {
    value: 1,
    label: "Clove of garlic",
    valueSuffix: false,
  },
];

const STEPS = [
  <Text>
    Pur the can of tomatoes in a container and crush it into a smooth-ish sauce
    with your hands
  </Text>,
  <Text>
    Put your <b>pan on medium heat</b> and add the olive oil.
  </Text>,
  <Text>
    When the pan has heated up, add the <b>garlic</b> and fry until softened.
    Make sure it doesn't get any color since it'll give it a bitter taste.
  </Text>,
  <Text>
    Pour in the <b>crushed tomatoes</b> in the pan
  </Text>,
  <Text>
    Add <b>all the remaining ingredients</b> (sugar, salt, basil) and let it
    cook on low heat for 20-30 minutes.
  </Text>,
  <Text>
    The sauce is <b>done</b>! For best result, keep it in the fridge for a few
    hours, or overnight, to let it developer more flavor. But you can definitely
    use it right away!
  </Text>,
];

export default function NeapolitanSauce() {
  return (
    <Page
      metaTitle="Neapolitan style pizza sauce"
      description="The ultimate pizza sauce for a Neapolitan style pizza"
      image={metaImage}
    >
      <Post
        title="Neapolitan style pizza sauce"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            additionalMeta={<Badge value="45min" label="Prep time" />}
            ingredientSuffix="batch"
            ingredients={INGREDIENTS}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              There's a lot of variants for the tomato sauce for a Neapolitan
              pizza. Some prefer to not cook it, some prefer it containing
              nothing more than San Marzano's, basil and salt.
            </Text>

            <Text variant="ingress">
              This is my favorite way of doing it. It's not as flavorful as my{" "}
              <Link href="/pizza/new-york-style-sauce">
                New York Style sauce
              </Link>
              , but more subtle to let the toppings shine.
            </Text>

            <Text variant="ingress">
              This sauce pairs well with my{" "}
              <Link href="/pizza/neapolitan">Neapolitan style</Link> dough.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
