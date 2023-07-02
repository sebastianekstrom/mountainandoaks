import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Text from "components/Text";
import Ingredients from "components/Ingredients";
import Alert from "components/Alert";
import MethodImage from "components/MethodImage";

import heroImage from "public/images/recipes/bolognese/thumbnails/tall.jpg";

import metaImage from "public/images/recipes/bolognese/thumbnails/meta.png";
import image1 from "public/images/recipes/bolognese/1.jpg";
import image2 from "public/images/recipes/bolognese/2.jpg";
import image3 from "public/images/recipes/bolognese/3.jpg";
import image4 from "public/images/recipes/bolognese/4.jpg";
import image5 from "public/images/recipes/bolognese/5.jpg";
import Method from "components/Method";

const INGREDIENTS = [
  {
    label: "Bolognese",
    ingredients: [
      {
        value: 125,
        label: "Minced beef",
      },
      {
        value: 125,
        label: "Chicken stock",
      },
      {
        value: 57.5,
        label: "White wine",
      },
      {
        value: 57.5,
        label: "Milk",
      },
      {
        value: 25,
        label: "Bacon or pancetta",
      },
      {
        value: 18.75,
        label: "Tomato paste (or purée)",
      },
      {
        value: 17.5,
        label: "Onion",
      },
      {
        value: 8.75,
        label: "Celery",
      },
      {
        value: 8.75,
        label: "Carrot",
      },
      {
        value: 0.2,
        label: "Cloves of garlic",
        valueSuffix: false,
        exludeFromTotalWeight: true,
      },
      {
        value: 0.25,
        label: "Bay leaf",
        valueSuffix: false,
      },
      {
        value: 1,
        label: "Pinch of nut meg",
        valueSuffix: false,
        excludeValue: true,
      },
    ],
  },
  {
    label: "Pasta",
    ingredients: [
      {
        value: 125,
        label: "Spaghetti or papardelle",
      },
    ],
  },
  {
    label: "Garnish",
    ingredients: [
      {
        value: 99999,
        label: "Grated Parmesan or Pecorino",
        excludeValue: true,
        valueSuffix: false,
      },
      {
        value: 1,
        label: "Splash of olive oil",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 1,
        label: "Freshly ground black pepper",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 1,
        label: "Fresh oregano",
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
        <Alert
          title="Mirepoix"
          description={
            <>
              A mix celery, carrot and onion is called a mirepoix, or soffritto,
              and is a common flavour base in cooking
            </>
          }
        />
      }
    >
      Start off with some preparation. <br />
      <br /> Finely chop the <b>celery, carrot and onion</b>, the pieces of
      vegetable should be very, very small so it melts into the sauce. Use a
      kitchen blender if you have one! Place the mix of vegetables in a
      container.
    </Text>
    <br />
    <Text>
      Next, finely chop the <b>garlic</b>, then slice the <b>bacon/pancetta</b>{" "}
      into small cubes, about 5mm/0.2inch in size.
    </Text>
    <br />
    <Text extra={<MethodImage src={image1} alt="" />}>
      After that, measure up the rest of the ingredients (the <b>wine</b>,{" "}
      <b>tomato paste</b>, <b>chicken stock</b> and <b>milk</b>) and place in
      containers.
    </Text>
  </>,
  <Text
    extra={
      <Alert
        title="Like a Rolling Stone"
        description={
          <>
            The reason we roll the meat into balls is because we want a lot of
            browning due to the flavour it produces, but not on all the meat
            because that'll make it dry
          </>
        }
      />
    }
  >
    With your hands, <b>roll the beef</b> into balls, about 5cm/2inch in
    diameter. Don't roll them too tightly, just enough to make them keep their
    shape.
  </Text>,
  <>
    <Text>
      Heat vegetable oil in a <b>pot on high heat</b>. Add the balls of beef and
      brown it.
    </Text>
    <br />
    <Text
      extra={
        <Alert
          title="Embrace the caramelization"
          description={
            <>
              Don't be scared here, the beef should get a really dark brown
              color. You want that Maillard reaction going on to increase the
              flavour.
            </>
          }
        />
      }
    >
      Once browned, transfer the balls of meat to a bowl and let it rest for a
      bit.
    </Text>
  </>,
  <>
    <Text>
      Turn down the heat to medium and add the <b>bacon/pancetta</b> into the
      pot, let it cook for a few minutes. Once the fat is all rendered add the
      mirepoix (<b>celery, carrot, onion</b>).
    </Text>
    <br />
    <Text extra={<MethodImage src={image2} alt="" />}>
      Let it cook for a minute or two until softened.
    </Text>
  </>,
  <Text extra={<MethodImage src={image3} alt="" />}>
    Add the <b>balls of meat</b> into the pot and gently break them apart with a
    spoon. Add the <b>wine</b> and let it simmer for about 10 minutes until most
    of the wine has evaporated.
  </Text>,
  <Text extra={<MethodImage src={image4} alt="" />}>
    Add the <b>tomato paste</b>, <b>garlic</b> and pinch of freshley shredded{" "}
    <b>nut meg</b>. Let it cook for another 5 minutes.
  </Text>,
  <>
    <Text>
      Add the <b>bay leaf</b> and pour in the <b>chicken stock</b> and{" "}
      <b>milk</b>.
      <br />
      <br />
      Let everything cook on low heat for <b>2–2½ hours</b> without a lid. Stir
      the pot once in a while. If the sauce starts to dry out towards the end,
      add some more chicken stock.
    </Text>
    <br />
    <Text>
      The finished sauce should be very thick, but'll get desired consistency
      once a splash of pasta water is added towards the end.
    </Text>
    <br />
    <Text>
      Remember to <b>continuously taste and season</b> as the sauce cooks!
    </Text>
  </>,
  <Text
    extra={
      <Alert
        title="Get salty"
        description={
          <>
            Remember to add a <i>bunch</i> of salt in the pasta water, it should
            taste like taking a sip of the sea. If you think that{" "}
            <i>“this is enough salt”</i> you should probably add a bit more
          </>
        }
      />
    }
  >
    Once you're happy with the flavour of the Bolognese, start to{" "}
    <b>boil the pasta</b>.
  </Text>,
  <Text>
    When the pasta is almost done (very al dente), take a cup and{" "}
    <b>grab some of that pasta water</b>. You'll use this later to thicken the
    sauce.
  </Text>,
  <Text>
    <b>Drain the pasta</b> and add it to the pot with the Bolognese.
  </Text>,
  <Text>
    Add a splash of the <b>pasta water</b> that you saved in a cup.
  </Text>,
  <Text>
    Stir the pasta and the sauce and <b>let it all combine</b> for a minute or
    two.
  </Text>,
  <Text extra={<MethodImage src={image5} alt="" />}>
    Serve the dish with some parmesan, freshly grounded black bepper, olive oil
    and fresh oregano sprinkled on top.
  </Text>,
];

export default function Bolognese() {
  return (
    <Page
      metaTitle="Pasta Bolognese"
      description="Here's my favorite take on a Bolognese. This tasty version combines beef, chicken stock and milk, simmering for over 2 hours."
      image={metaImage}
    >
      <Post
        title="Pasta Bolognese"
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
              There are almost as many Bolognese recipes as there are Italians,
              each one unique. Yet, here's my favorite take on it. This tasty
              version combines beef, chicken stock and milk, simmering for over
              2 hours.
            </Text>
            <Text variant="ingress">
              Combine it with your favorite pasta, add a dusting of Parmesan,
              and pair it with a somewhat decent Barolo. This pasta dish is sure
              to impress and never disappoint.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
