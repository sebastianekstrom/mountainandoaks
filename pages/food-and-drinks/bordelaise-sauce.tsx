import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Text from "components/Text";
import Ingredients from "components/Ingredients";
import MethodImage from "components/MethodImage";
import Alert from "components/Alert";
import heroImage from "public/images/recipes/bordelaise-sauce/thumbnails/tall.png";

import metaImage from "public/images/recipes/bordelaise-sauce/thumbnails/meta.png";
import image1 from "public/images/recipes/bordelaise-sauce/1.png";
import image2 from "public/images/recipes/bordelaise-sauce/2.png";
import image3 from "public/images/recipes/bordelaise-sauce/3.png";
import image4 from "public/images/recipes/bordelaise-sauce/4.png";
import image5 from "public/images/recipes/bordelaise-sauce/5.png";

import image7 from "public/images/recipes/bordelaise-sauce/7.png";
import image8 from "public/images/recipes/bordelaise-sauce/8.png";
import Method from "components/Method";

const INGREDIENTS = [
  {
    value: 450,
    label: "Veel or beef stock",
  },
  {
    value: 300,
    label: "Red wine (from Bordeaux)",
  },
  {
    value: 35,
    label: "Shallots",
  },
  {
    value: 20,
    label: "Bone marrow (optional)",
  },
  {
    value: 20,
    label: "Butter",
  },

  {
    value: 15,
    label: "Cold butter to finish the sauce",
  },
  {
    value: 3,
    label: "Sprigs of thyme",
    valueSuffix: false,
    exludeFromTotalWeight: true,
  },
  {
    value: 1,
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
  <Text
    extra={
      <>
        <Alert
          title="Blast it!"
          description={
            <>
              You can also do this Marco Pierre White style and set the heat to
              the absolute max and reduce the sauce really fast. He argues that
              it increases the flavour even more. But I prefer doing it on
              medium heat, since it's easier to control.
            </>
          }
        />
        <MethodImage src={image4} alt="" />
      </>
    }
  >
    Set the pan to <b>medium heat</b> and pour in <b>half of the wine</b>, and
    add the <b>bay leaf</b> and <b>thyme</b>.
  </Text>,
  <Text>
    Allow the wine to simmer until it has <b>reduced by half</b>.
  </Text>,
  <Text>
    Add the <b>remaining wine</b> and let it simmer until <b>reduced by half</b>{" "}
    again.
  </Text>,
  <Text>
    Pour in the <b>beef stock</b>, and continue to simmer until it’s{" "}
    <b>reduced by half</b>.
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
              choose not to strain it, extract the thyme from the sauce.
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
  <Text>
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

export default function Bolognese() {
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
            hideWeight
            ingredientSuffix="batch"
            ingredients={INGREDIENTS}
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
      ></Post>
    </Page>
  );
}
