import React from "react";

import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Link } from "components/Link/Link";
import { Text } from "components/Text/Text";
import { Alert } from "components/Alert/Alert";
import { Ingredients } from "components/Ingredients/Ingredients";
import { MethodImage } from "components/MethodImage/MethodImage";
import { WindowPaneTest } from "components/WindowPaneTest/WindowPaneTest";

import heroImage from "public/images/pizza/detroit/thumbnails/tall.jpg";
import metaImage from "public/images/pizza/detroit/thumbnails/meta.png";
import detroit2 from "public/images/pizza/detroit/detroit-2.jpg";
import detroit3 from "public/images/pizza/detroit/detroit-3.jpg";
import detroit4 from "public/images/pizza/detroit/detroit-4.jpg";
import { Method } from "components/Method/Method";

const INGREDIENTS = [
  {
    label: "Dough",
    ingredients: [
      {
        value: 300,
        label: "Bread flour",
        isFlour: true,
      },
      {
        value: 225,
        label: "Water",
        isWater: true,
      },
      {
        value: 11,
        label: "Salt",
      },
      {
        value: 5,
        label: "Dry yeast",
      },
      {
        value: 30,
        label: "Olive oil to coat the pan",
        exludeFromTotalWeight: true,
      },
    ],
  },
  {
    label: "Tomato sauce",
    ingredients: [
      {
        value: 400,
        label: "Canned tomatoes",
      },
      {
        value: 30,
        label: "Olive oil",
      },
      {
        value: 7,
        label: "Salt",
      },
      {
        value: 7,
        label: "Sugar",
      },
      {
        value: 3,
        label: "Dried oregano",
      },
      {
        value: 3,
        label: "Garlic powder",
      },
      {
        value: 3,
        label: "Onion powder",
      },
      {
        value: 1.5,
        label: "Cloves of garlic",
        valueSuffix: false,
      },
    ],
  },
  {
    label: "Toppings",
    ingredients: [
      {
        value: 170,
        label: "Mozzarella (low moisture)",
      },
      {
        value: 170,
        label: "Cheeze of your choice",
      },
      {
        value: 340,
        label: "Sausage (pepperoni or chorizo)",
      },
      {
        value: 20,
        label: "Finely shredded Parmesan",
      },
    ],
  },
];

const STEPS = [
  <Text>
    In a container, <b>mix all the dry ingredients</b> (flour, salt, yeast) and
    give it a quick mix with a spoon, then add the <b>water</b>.
  </Text>,
  <Text extra={<WindowPaneTest />}>
    Start <b>kneading the dough</b>. If you have a stand mixer mix it for 2
    minutes on low speed to combine the dough, and then 10 minutes on medium to
    develop gluten strength. If you knead by hand, knead for 10-12 minutes.{" "}
  </Text>,
  <Text>
    Transfer the dough to a lightly oiled bowl, cover it with a damp towel and
    let it rest in room temperature until it has doubled in size, about{" "}
    <b>2 hours</b>. <br />
    <br />
    You can also cold proof the dough in the fridge for 4-72 hours to develop
    more taste. Take the dough out of the fridge 1 hour before bake.
  </Text>,
  <Text>
    Adjust oven rack to lowest position and preheat oven to <b>275°C/525°F</b>.
    If you have a pizza steel, place it on the oven rack to get a more crispy
    pizza bottom.
  </Text>,
  <Text
    extra={
      <Alert
        title="Tip"
        description={
          <>
            Remember to over season your sauce, the dough and cheeze will absorb{" "}
            <i>a lot of</i> the flavor.
          </>
        }
      />
    }
  >
    Time to make the pizza sauce. Add the canned tomatoes to a container and mix
    them until smooth. Heat the <b>olive oil</b> in a sauce pan over medium
    heat. Add the <b>garlic</b>, <b>oregano</b> and <b>chili pepper flakes</b>{" "}
    and cook for 30 seconds. Add the <b>tomatoes</b>, <b>garlic powder</b>,{" "}
    <b>onion powder</b> and <b>sugar</b>. Bring the sauce to a simmer and let it
    cook for 30 minutes. Season to taste with salt.
    <br />
    <br />I prefer to make the sauce the night before to make the pizza baking
    easier, and also letting the sauce develop as much taste as possible.
  </Text>,
  <Text>
    <b>Pour a couple tablespoons olive oil</b> in the bottom of a cast iron pan
    (roughly 23 x 33 cm / 9 x 13 inch in size) and transfer the dough to the
    pan. <b>Press down on the dough</b> to spread it toward the edges as much as
    you can without tearing it. <br />
    <br />
    If you can't spread it all the way to the edges, cover the pan in plastic
    wrap and let the dough rest for 15 minutes, and then give it another try.
  </Text>,
  <Text extra={<MethodImage src={detroit2} alt="Preparation of the pizza" />}>
    <b>Cut the cheese</b> into small cubes (1cm / 1⁄3 of an inch). Lay{" "}
    <b>half of the sausage</b> evenly over the face of the dough.{" "}
    <b>Spread the cheese</b> evently across the dough, make sure to add it to
    the very edges of the pan. <b>Add the rest of the sausage</b>.{" "}
    <b>Spoon the tomato sauce</b> over the surface in 3 even rows.
  </Text>,
  <Text>
    Transfer the pan to oven and bake until edges are black and bubbly the
    cheese is lightly brown, it'll take about <b>12-15 minutes</b>. Transfer the
    pan to a trivet or folded kitchen towel on countertop.
  </Text>,
  <Text
    extra={
      <>
        <MethodImage src={detroit3} alt="Pizza fresh from the oven" />
        <MethodImage src={detroit4} alt="Pizza cut in half" />
      </>
    }
  >
    Run a thin metal spatula all the way around the edges of the pan to loosen
    the pizza. You can also use a dough scraper made out of steel. Carefully
    lift it out and slide it onto a cutting board. Cut pizza and serve.
  </Text>,
];

export default function DetroitStyle() {
  return (
    <Page
      metaTitle="Detroit style pizza"
      description="The classic Detroit style pizza dough"
      image={metaImage}
    >
      <Post
        title="Detroit style pizza"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            ingredientSuffix="pizza"
            weightLabel="Dough weight"
            ingredients={INGREDIENTS}
            onlyCalculateMetaFrom={INGREDIENTS[0].ingredients}
            recipeTimes={{
              proofTimeInMinutes: 120,
              roomTempTimeInMinutes: 60,
              prepTimeInMinutes: 30,
            }}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              The Detroit style pizza is a deep-dish pizza made in a rectangle
              steel pan and then cut into squares.
            </Text>
            <Text variant="ingress">
              The dough has a unusually high hydration level for a pizza which
              creates a fluffy, moist and delicious pizza topped with low
              hydration mozzarella and sausage.
            </Text>
            <Text variant="ingress">
              This recipe is inspired by{" "}
              <Link href="https://www.seriouseats.com/detroit-style-pizza-recipe">
                J. Kenji López-Alt
              </Link>{" "}
              but with modifications to streamline the process and add a bit
              more flavor.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
