import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Link from "components/Link";
import Text from "components/Text";
import Ingredients from "components/Ingredients";

import heroImage from "public/images/bread/danish-rye-bread/thumbnails/tall.jpg";
import metaImage from "public/images/bread/danish-rye-bread/thumbnails/meta.png";
import Method from "components/Method";

const INGREDIENTS = [
  {
    value: 70,
    label: "Bread flour (vetemjöl)",
    isFlour: true,
  },
  {
    value: 67,
    label: "Rye flur (rågmjöl)",
    isFlour: true,
  },
  {
    value: 200,
    label: "Sour milk (filmjölk)",
    isWater: true,
  },
  {
    value: 150,
    label: "Beer (stour or porter)",
    isWater: true,
  },
  {
    value: 133,
    label: "Syrup (sirap)",
  },
  {
    value: 20,
    label: "Pumpkin seeds, for decoration",
  },
  {
    value: 20,
    label: "Oatmeal (havregryn), for decoration",
  },
  {
    value: 7,
    label: "Salt",
  },
  {
    value: 7,
    label: "Bicarbonate (bikarbonat)",
  },
  {
    value: 4,
    label: "Anise (anis)",
  },
  {
    value: 4,
    label: "Fennel seeds (fänkålsfrön)",
  },
];

const STEPS = [
  <Text>
    Set the oven to <b>180°C/356°F</b>
  </Text>,
  <Text>
    Grind the anise and fennel seeds in a mortar until it becomes a fine powder
  </Text>,
  <Text>
    Mix sour milk, salt, bicarbonate and the mixed anise and fennel seeds in a
    bowl
  </Text>,
  <Text>
    Add the rye flour, bread flour, syrup and beer. Mix with a spatula or your
    hands until smooth
  </Text>,
  <Text>Pour the dough into a icing bag or a pitcher</Text>,
  <Text>
    Grab your mini bread pan (it should look something like{" "}
    <Link href="https://img.tradera.net/large-fit/044/506366044_3499922f-1ad7-4ac4-b11c-26aabf49e2b7.jpg">
      this
    </Link>
    ) and pour the dough into it. Make sure only to <b>fill each slot by 2/3</b>{" "}
    since the dough will rise in the oven
  </Text>,
  <Text>Sprinkle some pumpkin seeds and oat meal on top of the dough</Text>,
  <Text>
    Bake it in the oven for about <b>13 minutes - 15 minutes</b>, the inner
    temperature of the dough should be <b>97°C/206°F</b> when it's done
  </Text>,
  <Text>
    Let it cool for <b>20 minutes - 30 minutes</b>
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
            <Text variant="ingress">
              This recipe contains a lot of Nordic ingredients which is why the
              ingredient list is translated to the language of vikings.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
