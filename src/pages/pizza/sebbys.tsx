import React from "react";

import Page from "components/Page";
import Post from "components/Post";
import Link from "components/Link";
import Text from "components/Text";
import Alert from "components/Alert";
import Ingredients from "components/Ingredients";
import MethodImage from "components/MethodImage";
import WindowPaneTest from "components/WindowPaneTest";
import PokeTest from "components/PokeTest";

import heroImage from "public/images/recipes/sebbys/thumbnails/tall.png";
import metaImage from "public/images/recipes/sebbys/thumbnails/meta.png";
import finalImage from "public/images/recipes/sebbys/final.png";
import shapeImage from "public/images/recipes/sebbys/pre-oven.png";
import mirePoix from "public/images/recipes/sebbys/mirepoix.png";
import sauce from "public/images/recipes/sebbys/sauce.png";
import Method from "components/Method";

const INGREDIENTS = [
  {
    label: "Dough",
    ingredients: [
      {
        value: 37.14,
        label: "Bread flour",
        isFlour: true,
      },
      {
        value: 13.215,
        label: "Water",
        isWater: true,
      },
      {
        value: 13.215,
        label: "Milk",
        isWater: true,
      },
      {
        value: 2.14,
        label: "Vegetable oil",
      },
      {
        value: 0.43,
        label: "Instant yeast",
      },
      {
        value: 0.57,
        label: "Salt",
      },
    ],
  },
  {
    label: "Bolognese",
    ingredients: [
      {
        value: 35.715,
        label: "Minced meat (beef)",
      },
      {
        value: 33.57,
        label: "Beef stock",
      },
      {
        value: 28.57,
        label: "Canned whole tomatoes",
      },
      {
        value: 17.86,
        label: "Red wine",
      },
      {
        value: 17.14,
        label: "Mirepoix (celery, onion, carrot)",
      },
      {
        value: 14.285,
        label: "Water",
      },
      {
        value: 10.715,
        label: "Mushroom",
      },
      {
        value: 4.285,
        label: "Tomato purée",
      },
      {
        value: 0.93,
        label: "Garlic",
      },
      {
        value: 0.07,
        label: "Bay leaf",
        valueSuffix: false,
      },
    ],
  },
  {
    label: "Toppings",
    ingredients: [
      {
        value: 11.43,
        label: "Cheeze of your choice",
      },
      {
        value: 2.14,
        label: "Finely shredded Parmesan",
      },
    ],
  },
];

const STEPS = [
  {
    label: "1. Make the bolognese",
    steps: [
      <Text
        extra={
          <Alert
            title="Mirepoix"
            description={
              <>
                I make my mirepoix with the 1:2:1 ratio, meaning one part
                celery, two parts onion and one part carrot.
              </>
            }
          />
        }
      >
        Chop the mirepoix (celery, onion, carrot) into smaller pieces, it
        doesn't have to be fancy, it's just so it'll blend easier in the food
        processor.
      </Text>,

      <Text>
        Cut the <b>mushrooms</b> in quarters. Same here, it doesn't need to be
        fancy, it's just to make it easier for the stand mixer.
      </Text>,
      <Text>
        Mince the <b>garlic</b>, set aside for later use.
      </Text>,
      <Text>
        Mix the <b>canned tomatoes</b> until smooth, pour it into a container
        for later use.
      </Text>,
      <Text>
        <b>Add the mirepoix and mushrooms</b> into a food processor and mix
        until it’s very finely chopped. We don’t any large pieces of either meat
        or vegetables in this sauce. Transfer into a bowl.
        <br />
        <br />
        If you don't have a food processor, finely, finely chop the mirepoix and
        mushrooms. It should turn into almost a paste.
      </Text>,
      <Text>
        <b>Heat oil in a pan</b> or Dutch oven on medium/high heat. With your
        hand, break the <b>minced beef</b> into smaller balls put them into the
        pan. Keep turning the balls of meat around, after 4-6 minutes the whole
        surface should be deeply browned (but still raw in the middle). Transfer
        the beef to another bowl.
      </Text>,
      <Text extra={<MethodImage src={mirePoix} alt="" />}>
        Wipe out any burnt meat from the pan and set it to medium heat. Add some
        olive oil and add the <b>mirepoix, garlic and mushrooms</b>. Stir until
        soft, about 3-4 minutes. Be careful not to burn the garlic.
      </Text>,
      <Text>
        Scrape the contents of the pan to the sides of the pan and add the
        tomato paste on the opposite side. <b>Stir the tomato paste</b> and let
        it cook for 2-3 minutes to develop more flavor.
      </Text>,
      <Text>Stir and combine everything in the pan until mixed.</Text>,
      <Text>
        Add the minced beef and stir, try to mash the meat into smaller pieces.
        The smaller pieces of meat the better.
      </Text>,
      <Text>Add the red wine and let it cook for 1-2 minutes.</Text>,
      <Text>
        Add the rest of the liquids (<b>beef stock, water, canned tomatoes</b>)
        as well as the bay leaf.
      </Text>,
      <Text extra={<MethodImage src={sauce} alt="" />}>
        Let the sauce <b>cook for 90 minutes</b> without a lid. The goal is to
        get a very <em>very</em> thick sauce. You'll want to be able to scrape
        the bottom of the pan with a spatula and the sauce should not try to
        fill the space. If it starts to thicken too much before 90 minutes has
        passed, add a splash of water.
        <br />
        <br />
        If the sauce is too watery it'll make the pirogi very gooey and just
        bad.
      </Text>,

      <Text
        extra={
          <Alert
            title="Unleash the fury!"
            description={
              <>
                Remember to over season the sauce, the pirog dough will absorb a
                lot of the flavor. Take the sauce to Flavor Town 🤙
              </>
            }
          />
        }
      >
        During the cooking, continuously taste the sauce and season accordingly.
      </Text>,
      <Text>
        Once you're happy with the sauce you can either start making the dough
        or keep it in the fridge for a few hours, or even better, over night.{" "}
        <br />
        <br />I prefer making the sauce the day before, this means there's a lot
        less steps to do when making the actual pirog and the sauce has more
        time to develop flavor.
      </Text>,
    ],
  },
  {
    label: "2. The pirog dough",
    steps: [
      <Text>
        Preheat the oven to <b>250°C/480°F</b>.
      </Text>,
      <Text>
        Add the yeast to a bowl, if you're using fresh yeast crumble it into
        smaller pieces to make it easier to integrate into the dough.
      </Text>,
      <Text>
        Heat the milk and the water to <b>32°C/90°F</b>. This is easiest done in
        a microwave, full blast for about 30-45 seconds.
      </Text>,
      <Text>
        Add the milk and water to the bowl and stir to combine it with the
        yeast.
      </Text>,
      <Text>Add the salt and the vegetable oil.</Text>,
      <Text>Add all the flour and give it a quick stir with a spoon.</Text>,
      <Text extra={<WindowPaneTest />}>
        Start <b>kneading the dough</b>. If you have a stand mixer mix it for 2
        minutes on low speed to combine the dough, and then 5 minutes on medium
        to develop gluten strength. If you knead by hand, knead for 10-12
        minutes.
      </Text>,
      <Text extra={<PokeTest />}>
        Wrap the bowl with plastic wrap, or a wet kitchen towel, to prevent it
        from drying out. Let it proof in room temperature for 45-90min depending
        on your yeast, the dough should have roughly doubled in size.
      </Text>,
      <Text>Time to make the pirog!</Text>,
    ],
  },
  {
    label: "3. Assembling the pirog",
    steps: [
      <Text>Shred the cheese and Parmesan.</Text>,
      <Text>
        Divide the dough into <b>14 equal parts</b>
      </Text>,
      <Text>
        Flour your work surface and with a rolling-pin flatten each dough into
        an oval shape. It should be roughly <b>3mm / 0.1 inch thick</b>. You
        don't have to be super nit-picky with the shape, it will turn out great
        anyways.
      </Text>,
      <Text>
        Gently pick up the dough and place it on a piece of parchment paper.
        Stretch it out a bit with your hands if needed.
      </Text>,
      <Text>
        With a spoon, add the bolognese in the middle of the dough and flatten
        it out across the dough. Make sure to have at least <b>1cm / 0.4</b>{" "}
        inch margin on the sides.
      </Text>,
      <Text>
        Cover the bolognese with a thin layer of Parmesan and shredded cheese.
      </Text>,
      <Text
        extra={
          <MethodImage src={shapeImage} alt="Four perogis on a baking sheet" />
        }
      >
        Fold the edgee of the dough into its center, pinch the edges to get the
        classic Gorby's shape
      </Text>,
      <Text>
        Continue the process and fill the baking parchment paper with pirogis.
        Once filled, place the parchment paper on a baking sheet. I can usually
        fit around 4 pirogis on one sheet.
      </Text>,
      <Text>
        Put the pirogis in the oven to bake for <b>10-12 minutes</b> or until
        golden brown. Continue making the rest of the perogis.
      </Text>,
      <Text
        extra={
          <>
            <MethodImage src={finalImage} alt="" />
          </>
        }
      >
        Enjoy!
      </Text>,
    ],
  },
];

export default function Sebbys() {
  return (
    <Page
      metaTitle="Sebby's"
      description="The upgrade of the Swedish classic, Gorby's"
      image={metaImage}
    >
      <Post
        title="Sebby's"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            startingMultiplier={14}
            ingredientSuffix="pirogs"
            weightLabel="Dough weight"
            ingredients={INGREDIENTS}
            onlyCalculateMetaFrom={INGREDIENTS[0].ingredients}
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              Every Swede knows about the glorious{" "}
              <Link
                target="_blank"
                href="https://static.mathem.se/shared/images/products/large/07310960044079_c1n1.jpg"
              >
                Gorby's
              </Link>
              , a pirog filled with low quality meat and topped with even lower
              quality cheese.
            </Text>
            <Text variant="ingress">
              This recipe is a version of the Gorby's, with home made dough and
              a delicious variant of a bolognese.
            </Text>
            <Text variant="ingress">
              I recommend making the bolognese a few hours, up to a day, before
              making the pirog to develop more flavor.
            </Text>
          </>
        }
      ></Post>
    </Page>
  );
}
