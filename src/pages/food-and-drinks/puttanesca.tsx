import React from "react";

import image1 from "public/images/recipes/puttanesca/1.png";
import image10 from "public/images/recipes/puttanesca/10.png";
import image11 from "public/images/recipes/puttanesca/11.png";
import image13 from "public/images/recipes/puttanesca/13.png";
import image2 from "public/images/recipes/puttanesca/2.png";
import image3 from "public/images/recipes/puttanesca/3.png";
import image4 from "public/images/recipes/puttanesca/4.png";
import image5 from "public/images/recipes/puttanesca/5.png";
import image6 from "public/images/recipes/puttanesca/6.png";
import image7 from "public/images/recipes/puttanesca/7.png";
import image8 from "public/images/recipes/puttanesca/8.png";
import image9 from "public/images/recipes/puttanesca/9.png";
import metaImage from "public/images/recipes/puttanesca/thumbnails/meta.png";
import heroImage from "public/images/recipes/puttanesca/thumbnails/tall.png";

import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    label: "Puttanesca",
    ingredients: [
      {
        value: 100,
        label: "Canned whole tomatoes",
      },
      {
        value: 35,
        label: "Olives",
      },
      {
        value: 30,
        label: "Olive oil",
      },
      {
        value: 25,
        label: "Onion",
      },
      {
        value: 17.5,
        label: "Capers",
      },

      {
        value: 3.5,
        label: "Anchovies",
      },
      {
        value: 0.5,
        label: "Red pepper flakes",
      },
      {
        value: 1,
        label: "Cloves of garlic",
        valueSuffix: false,
        exludeFromTotalWeight: true,
      },
    ],
  },
  {
    label: "Pasta",
    ingredients: [
      {
        value: 125,
        label: "Linguini or spaghetti",
      },
    ],
  },
  {
    label: "Garnish",
    ingredients: [
      {
        value: 1,
        label: "Parmesan",
        excludeValue: true,
        valueSuffix: false,
      },
      {
        value: 1,
        label: "Parsley",
        excludeValue: true,
        valueSuffix: false,
      },
      {
        value: 1,
        label: "Black pepper",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 1,
        label: "Olive oil",
        valueSuffix: false,
        excludeValue: true,
      },
    ],
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
      Grate the <b>Parmesan cheese</b> and <b>chop the parsley</b>, setting them
      aside in separate containers. <br />
      <br />
      Coarsely <b>chop the garlic, onion, anchovies, olives, and capers</b>,
      keeping each in its own container for easy access during cooking.
    </Text>
  </>,
  <Text
    extra={
      <>
        <MethodImage src={image3} alt="" />
        <MethodImage src={image4} alt="" />
      </>
    }
  >
    Hand-crush the <b>tomatoes</b>, breaking them down into smaller pieces until
    you have a relatively smooth (but not too smooth) sauce. <br />
    <br />
    Prep is done!
  </Text>,
  <Text>
    Set a pot of <b>water on the stove to boil</b> for the pasta.
  </Text>,
  <Text>
    <b>Heat a pan</b> over medium heat.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image5} alt="" />
      </>
    }
  >
    Drizzle in the <b>olive oil</b> in the pan and add the{" "}
    <b>onion, anchovies</b>, and <b>red pepper flakes</b>. <br />
    <br />
    Sauté these for about <b>5 minutes</b> until the onions are translucent and
    the anchovies have melted into the oil.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image6} alt="" />
      </>
    }
  >
    Add the <b>capers</b>, <b>olives</b>, and <b>garlic</b> to the pan. Continue
    cooking for an additional <b>2 minutes</b>.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image7} alt="" />
      </>
    }
  >
    Stir in the <b>crushed tomatoes</b> and let them simmer for another 2 - 3
    minutes.
  </Text>,
  <Text>
    <b>Remove the pan</b> from the heat for the time being.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image8} alt="" />
      </>
    }
  >
    <b>Cook the pasta</b> in the boiling water according to the package
    instructions. But cook it for <b>1-2 minutes less</b>, the pasta will finish
    cooking in the sauce.
  </Text>,
  <Text>
    When the pasta starts to become ready, <b>reheat the sauce</b> over medium
    heat.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image13} alt="" />
      </>
    }
  >
    <b>Add the cooked pasta to the pan</b> with the sauce and mix well. If
    needed, add a <b>few splashes of pasta water</b> to help thicken the sauce.
    <br />
    <br />
    Allow the pasta and sauce to cook together for an additional{" "}
    <b>1-2 minutes</b> until it gets a bit more creamy in its consistency.
  </Text>,

  <Text
    extra={
      <>
        <MethodImage src={image9} alt="" />
      </>
    }
  >
    Sprinkle in the <b>chopped parsley</b> and some of the grated{" "}
    <b>Parmesan</b>, stirring until everything is well combined.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={image10} alt="" />
        <MethodImage src={image11} alt="" />
      </>
    }
  >
    Serve your Pasta alla Puttanesca hot, garnished with a little more{" "}
    <b>Parmesan</b>, <b>olive oil</b> and a twist of fresh ground{" "}
    <b>black pepper</b> to taste. <br />
    <br />
    Enjoy this rustic Italian classic!
  </Text>,
];

export default function Puttanesca() {
  return (
    <Page
      metaTitle="Pasta alla puttanesca"
      description="Pasta alla puttanesca is a rustic, hearty dish from southern Italy. Made with simple, robust ingredients like olives, capers, tomatoes, and anchovies, this pasta dish delivers a sauce that's packed with authentic, homely flavors."
      image={metaImage}
    >
      <Post
        title="Pasta alla puttanesca"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            hideWeight
            ingredientSuffix="portion"
            ingredients={INGREDIENTS}
            startingMultiplier={4}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              Pasta alla puttanesca is a rustic, hearty dish from southern
              Italy. Made with simple, robust ingredients like olives, capers,
              tomatoes, and anchovies, this pasta dish delivers a sauce that's
              packed with authentic, homely flavors.
            </Text>
            <Text variant="ingress">
              The anchovies provide an underlying savoriness that truly elevates
              the recipe. Quick and straightforward to prepare, it's an
              unpretentious meal that's perfect for any day of the week, feeding
              one or many with its satisfying, traditional charm.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
