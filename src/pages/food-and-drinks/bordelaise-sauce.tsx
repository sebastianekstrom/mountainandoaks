import React, { useState } from "react";

import image1 from "public/images/recipes/bordelaise-sauce/1.png";
import image2 from "public/images/recipes/bordelaise-sauce/2.png";
import image3 from "public/images/recipes/bordelaise-sauce/3_1.png";
import image4 from "public/images/recipes/bordelaise-sauce/4.png";
import image5 from "public/images/recipes/bordelaise-sauce/5.png";
import image7 from "public/images/recipes/bordelaise-sauce/7.png";
import image8 from "public/images/recipes/bordelaise-sauce/8.png";
import metaImage from "public/images/recipes/bordelaise-sauce/thumbnails/meta.png";
import heroImage from "public/images/recipes/bordelaise-sauce/thumbnails/tall.png";

import { Alert } from "components/Alert/Alert";
import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    value: 112.5,
    label: "Veel or beef stock",
  },
  {
    value: 112.5,
    label: "Red wine (from Bordeaux)",
  },
  {
    value: 8.75,
    label: "Shallots",
  },
  {
    value: 5,
    label: "Butter",
  },
  {
    value: 5,
    label: "Bone marrow (optional)",
  },
  {
    value: 3.75,
    label: "Cold butter to finish the sauce",
  },
  {
    value: 2.5,
    label: "Demi-glace (optional)",
  },
  {
    value: 1.5,
    label: "Sprigs of thyme",
    valueSuffix: false,
    exludeFromTotalWeight: true,
  },
  {
    value: 0.5,
    label: "Bay leaf",
    valueSuffix: false,
    exludeFromTotalWeight: true,
  },
];

const STEPS = [
  <>
    <Text
      extra={
        <>
          <MethodImage src={image1} alt="" />
          <MethodImage src={image2} alt="" />
        </>
      }
    >
      Begin by prepping your ingredients. <br />
      <br />
      Cut up the <b>butter</b>, and <b>chop the shallots</b> into a fine dice.
      <br />
      Measure up all the <b>liquids</b> and set aside.
      <br />
      <br />
      Bone marrow is optional, but it adds a lot of flavor and richness to the
      sauce.
    </Text>
  </>,
  <Text
    extra={
      <>
        <MethodImage src={image3} alt="" />
      </>
    }
  >
    Melt the butter in a pan and gently <b>sauté the shallots</b> until they
    turn translucent.
  </Text>,
  <Text>
    Set the pan to <b>medium heat</b> and pour in <b>half of the wine</b>, and
    add the <b>bay leaf</b> and <b>thyme</b>.
  </Text>,
  <Text
    extra={
      <>
        <Alert
          title="Blast it!"
          description={
            <>
              You can also do this Marco Pierre White style and set the heat to
              the absolute max and reduce the sauce really fast. He argues that
              it increases the flavor even more. But I prefer doing it on
              medium-high heat, since it's easier to control.
            </>
          }
        />
        <MethodImage src={image4} alt="" />
      </>
    }
  >
    Allow the wine to simmer until it has <b>reduced by half</b>.
  </Text>,
  <Text>
    Add the <b>remaining wine</b> and let it simmer until <b>reduced by half</b>{" "}
    again.
  </Text>,
  <Text>
    Pour in the <b>beef stock</b> and the optional <b>demi-glace</b>. Continue
    to simmer until it’s <b>reduced by half</b>.
  </Text>,
  <Text>
    When the sauce is nearing completion, with just a few minutes remaining,
    stir in the optional <b>bone marrow</b>.
  </Text>,
  <Text
    extra={
      <>
        <Alert
          description={
            <>
              Straining is optional, but it yields a smoother sauce. If you
              choose not to strain it, extract the thyme and bay leaf from the
              sauce.
            </>
          }
        />
        <MethodImage src={image5} alt="" />
      </>
    }
  >
    <b>Strain the sauce</b> through a fine sieve into a bowl, then clean the
    saucepan and return the sauce to it.
  </Text>,
  <Text
    extra={
      <Alert
        title="Deviation"
        description={
          <>
            If you want to stray away from the classic French recipe and create
            your own red wine sauce, now is the time!
            <br />
            <br />
            You can add a splash of <b>fish sauce</b> which will give more umami
            flavor (no, it will not taste like fish), <b>lemon juice</b> to
            freshen it up or thicken it with <b>dark brown roux</b> or{" "}
            <b>cornstarch</b>. Some <b>Worcestershire Sauce</b>? Why not? Wanna
            make it darker? Add a dash of <b>squid ink</b> or{" "}
            <b>black food coloring</b>.
          </>
        }
      />
    }
  >
    <b>Lower the heat</b> to a very gentle simmer, and season with <b>salt</b>{" "}
    and <b>white pepper</b> to taste.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image7} alt="" />
        <MethodImage src={image8} alt="" />
      </>
    }
  >
    Right before serving, enrich the sauce by <b>whisking in the cold butter</b>{" "}
    for a velvety finish.
  </Text>,
];

const STARTING_MULTIPLIER = 2;
const YIELD_PER_PORTION_IN_GRAMS = 50;

export default function BordelaiseSauce() {
  const [multiplier, setMultiplier] = useState(STARTING_MULTIPLIER);
  return (
    <Page
      metaTitle="Bordelaise sauce"
      description="Bordelaise sauce is a classic French sauce named after France’s Bordeaux region, which is well-known for its wine. It’s a flavorful sauce made from dry red wine, bone marrow, butter, shallots, and demi-glace."
      image={metaImage}
    >
      <Post
        title="Bordelaise sauce"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="portion"
            ingredients={INGREDIENTS}
            startingMultiplier={STARTING_MULTIPLIER}
            onChangeMultiplier={setMultiplier}
            additionalMeta={
              <Badge
                value={`~${YIELD_PER_PORTION_IN_GRAMS * multiplier}g`}
                label="of sauce"
              />
            }
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              Bordelaise sauce is a classic French sauce named after France’s
              Bordeaux region, which is well-known for its wine.
            </Text>
            <Text variant="ingress">
              It’s a flavorful sauce made from dry red wine, butter, shallots,
              and demi-glace, with bone marrow as an optional but traditional
              ingredient.
            </Text>
          </>
        }
      />
    </Page>
  );
}
