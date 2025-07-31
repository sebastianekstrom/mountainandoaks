import React from "react";

import metaImage from "public/images/bread/danish-rye-bread/thumbnails/meta.png";
import heroImage from "public/images/bread/danish-rye-bread/thumbnails/tall.jpg";

import { Ingredients } from "components/Ingredients/Ingredients";
import { Link } from "components/Link/Link";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    label: "Dough",
    ingredients: [
      {
        value: 200,
        label: "Filmjölk",
        isWater: true,
      },
      {
        value: 150,
        label: "Beer (stout or porter)",
        isWater: true,
      },
      {
        value: 133,
        label: "Dark syrup",
      },
      {
        value: 88,
        label: "Bread flour",
        isFlour: true,
      },
      {
        value: 85,
        label: "Rye flour",
        isFlour: true,
      },

      {
        value: 7,
        label: "Bicarbonate",
      },
      {
        value: 4,
        label: "Anise seeds",
      },
      {
        value: 4,
        label: "Fennel seeds",
      },
      {
        value: 3.5,
        label: "Salt",
      },
    ],
  },
  {
    label: "Toppings",
    ingredients: [
      {
        value: 0,
        label: "Pumpkin seeds",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 0,
        label: "Oatmeal",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 0,
        label: "Sea salt (optional)",
        valueSuffix: false,
        excludeValue: true,
      },
    ],
  },
];

const STEPS = [
  <Text>
    Set the oven to <b>180°C/356°F.</b>
  </Text>,
  <Text>Roughly chop the pumpkin seeds</Text>,
  <Text>
    Add the dry ingredients (<b>bread flour</b>, <b>rye flour</b>, <b>salt</b>,{" "}
    <b>bicarbonate</b>) to a bowl.
  </Text>,
  <Text>
    Grind the <b>anise</b> and <b>fennel</b> seeds in a mortar until it becomes
    a fine powder. Add the mixed seeds to the bowl with dry ingredients.
  </Text>,
  <Text>
    Add the wet ingredients (<b>filmjölk</b>, <b>beer</b>, <b>dark syrup</b>) to
    the bowl.
  </Text>,
  <Text>Mix a spatula or your hands until smooth</Text>,
  <Text>
    Once mixed, let sit for <b>5 minutes</b> to make sure the flour absorbs all
    the liquid
  </Text>,
  <Text>Pour the dough into a icing bag or a pitcher</Text>,
  <Text>
    Grab your mini bread pan (it should look something like{" "}
    <Link href="https://img.tradera.net/large-fit/044/506366044_3499922f-1ad7-4ac4-b11c-26aabf49e2b7.jpg">
      this
    </Link>
    ) and grease it with some natural oil (e.g rapeseed oil).
  </Text>,
  <Text>
    Pour the dough into the bread pan. Make sure only to{" "}
    <b>fill each slot by 2/3</b> since the dough will rise in the oven
  </Text>,
  <Text>Sprinkle some pumpkin seeds and oat meal on top of the dough</Text>,
  <Text>
    Bake it in the oven for about <b>20 minutes</b>, the inner temperature of
    the dough should be <b>97°C/206°F</b> when it's done
  </Text>,
  <Text>
    Let it cool for <b>20 minutes - 30 minutes</b>, preferably on a wire rack
  </Text>,
];

export default function DanishRyeBread() {
  return (
    <Page
      metaTitle="Danish rye bread"
      description="A classic danish mini loaf of bread, perfect as an appetizer with some marmelade"
      image={metaImage}
    >
      <Post
        title="Danish rye bread"
        heroImage={heroImage}
        ingredients={
          <Ingredients ingredientSuffix="batch" ingredients={INGREDIENTS} />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              A delicious sweet Danish rye bread that only takes an our or so to
              make. It's great as an appetizer or snack, served with some
              marmelade. One batch makes for about 12 mini loaves of bread.
            </Text>
          </>
        }
      />
    </Page>
  );
}
