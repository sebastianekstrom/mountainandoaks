import React from "react";

import image1 from "public/images/recipes/birria-tacos/1.png";
import image10 from "public/images/recipes/birria-tacos/10.png";
import image11 from "public/images/recipes/birria-tacos/11.png";
import image12 from "public/images/recipes/birria-tacos/12.png";
import image14 from "public/images/recipes/birria-tacos/14.png";
import image15 from "public/images/recipes/birria-tacos/15.png";
import image18 from "public/images/recipes/birria-tacos/18.png";
import image2 from "public/images/recipes/birria-tacos/2.png";
import image3 from "public/images/recipes/birria-tacos/3.png";
import image4 from "public/images/recipes/birria-tacos/4.png";
import image5 from "public/images/recipes/birria-tacos/5.png";
import image6 from "public/images/recipes/birria-tacos/6.png";
import image7 from "public/images/recipes/birria-tacos/7.png";
import image8 from "public/images/recipes/birria-tacos/8.png";
import image9 from "public/images/recipes/birria-tacos/9.png";
import metaImage from "public/images/recipes/birria-tacos/thumbnails/meta.png";
import heroImage from "public/images/recipes/birria-tacos/thumbnails/tall.png";

import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
  {
    label: "Birria",
    ingredients: [
      {
        value: 1200,
        label: "Beef stock",
      },
      {
        value: 500,
        label: "Chuck",
      },
      {
        value: 300,
        label: "Ox tail",
      },
      {
        value: 15,
        label: "White wine vinegar",
      },
      {
        value: 4,
        label: "Cloves of garlic",
        valueSuffix: false,
      },
      {
        value: 2.5,
        label: "Ancho chili",
        valueSuffix: false,
      },
      {
        value: 2.5,
        label: "Guajillo chili",
        valueSuffix: false,
      },
      {
        value: 1,
        label: "Chipotle chili",
        valueSuffix: false,
      },
      {
        value: 2,
        label: "Bay leaf",
        valueSuffix: false,
      },
      {
        value: 1,
        label: "Cinnamon stick",
        valueSuffix: false,
      },
      {
        value: 0.5,
        label: "Yellow onion",
        valueSuffix: false,
      },
      {
        value: 1,
        label: "Tomato",
        valueSuffix: false,
      },
      {
        value: 0.5,
        label: "Grinded coriander seeds",
        valueSuffix: " tsp",
      },
      {
        value: 0.5,
        label: "Cumin",
        valueSuffix: " tsp",
      },
      {
        value: 0.5,
        label: "Dried oregano",
        valueSuffix: " tsp",
      },
      {
        value: 0.3,
        label: "Clove",
        valueSuffix: " tsp",
      },
      {
        value: 1,
        label: "Salt & pepper",
        valueSuffix: false,
        excludeValue: true,
      },
    ],
  },
  {
    label: "For the taco",
    ingredients: [
      {
        value: 1,
        label: "Corn tortillas",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 1,
        label: "Lime",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 1,
        label: "Shredded cheese",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 1,
        label: "Cilantro",
        valueSuffix: false,
        excludeValue: true,
      },
      {
        value: 1,
        label: "White onion",
        valueSuffix: false,
        excludeValue: true,
      },
    ],
  },
];

const STEPS = [
  {
    label: "1. Making the birria",
    steps: [
      <>
        <Text extra={<MethodImage src={image1} alt="" />}>
          Start by prepping all your ingredients. <br />
          <br />
          De-seed and de-stem the <b>chilis</b>.
          <br />
          <br />
          Roughly <b>chop the onion</b> and <b>garlic</b>.
          <br />
          <br />
          Measure up the <b>vinegar</b>, <b>beef stock</b>, <b>cloves</b>,{" "}
          <b>cumin</b>, <b>oregano</b> and <b>coriander seeds</b>.
          <br />
          <br />
          <b>Cut the meat</b> into 5cm/2inch cubes and season it with salt.
        </Text>
      </>,
      <Text>
        Fill a pot with water and <b>bring to a boil</b>. Add the whole{" "}
        <b>tomato</b> and blanch for 2 minutes. Using a slotted spoon, transfer
        the tomato to a bowl and set aside.
      </Text>,
      <Text
        extra={
          <>
            <MethodImage src={image2} alt="" />
            <MethodImage src={image3} alt="" />
          </>
        }
      >
        Next up let's give the <b>meat some color</b> and flavor.
        <br />
        <br />
        <b>Heat a pan</b> over high heat with a splash of <b>vegetable oil</b>.
        In batches, add the cubed meat and <b>sear until browned</b> on all
        sides.
        <br />
        <br />
        Ensure not to overcrowd the pan to achieve a proper sear. Once all the
        meat is browned, set it aside.
      </Text>,
      <Text extra={<MethodImage src={image4} alt="" />}>
        Prepare the <b>sauce</b> for the birria
        <br />
        <br />
        In a separate pot, boil water and add the <b>chilis</b>. Immediately
        after, remove the pot from heat and let the chilis steep for{" "}
        <b>10 minutes</b> to soften.
      </Text>,
      <Text extra={<MethodImage src={image5} alt="" />}>
        In a blender, combine the softened <b>chilis</b>, <b>blanched tomato</b>
        , <b>chopped garlic</b>, <b>onion</b>, <b>ground coriander seeds</b>,{" "}
        <b>clove</b>, <b>cumin</b>, <b>vinegar</b>, and <b>oregano</b>.
        <br />
        <br />
        Blend on medium speed until a smooth paste forms.
      </Text>,
      <Text
        extra={
          <>
            <MethodImage src={image6} alt="" />
            <MethodImage src={image7} alt="" />
          </>
        }
      >
        In a large pot or Dutch oven, combine the <b>sauce</b>,{" "}
        <b>beef stock</b>, <b>browned meat</b>, <b>bay leaves</b> and{" "}
        <b>cinnamon stick</b>.
        <br />
        <br />
        Generously season it with <b>salt & pepper</b>. Cover and let it simmer
        on low heat for <b>2-3 hours</b> until the meat becomes very tender.
      </Text>,
      <Text>
        While the birria is simmering, prepare the taco accompaniments.{" "}
        <b>Slice the lime into wedges</b>, shred the <b>cheese</b>, chop the{" "}
        <b>cilantro</b> and finely dice the <b>white onion</b>.
        <br />
        <br />
        Keep these ingredients refrigerated until ready to serve.
      </Text>,
    ],
  },
  {
    label: "2. Making the taco",
    steps: [
      <Text>
        Begin by tasting the broth with a spoon. If needed,{" "}
        <b>adjust the seasoning</b> by adding a bit more <b>salt</b> or a dash
        of <b>vinegar or lime juice</b> to enhance its acidity.
      </Text>,
      <Text extra={<MethodImage src={image8} alt="" />}>
        Using tongs, carefully <b>remove the tender meat from the pot</b>. Place
        it on a cutting board or in a large bowl and use two forks to{" "}
        <b>shred the meat</b> into small, bite-sized pieces. Season with salt.
      </Text>,
      <Text extra={<MethodImage src={image9} alt="" />}>
        <b>Ladle the flavorful broth</b>, also known as consommé, from the pot
        into a wide, shallow bowl. This will be used for dipping the tacos.
      </Text>,
      <Text>
        Heat a <b>non-stick or cast-iron</b> skillet over medium heat.
      </Text>,
      <Text extra={<MethodImage src={image10} alt="" />}>
        Take a <b>tortilla</b> and gently{" "}
        <b>dip it into the bowl of consommé</b>, ensuring both sides are coated
        with the broth.
      </Text>,
      <Text>Transfer the broth-soaked tortilla to the hot pan.</Text>,
      <Text extra={<MethodImage src={image11} alt="" />}>
        Spread a <b>thin layer of cheese</b> over the entire surface of the
        tortilla. Allow the cheese to melt for about a minute.
      </Text>,
      <Text>
        Place the <b>shredded meat</b> on one half of the tortilla, drizzle a
        little bit more consommé over the meat for extra flavor.
      </Text>,
      <Text extra={<MethodImage src={image12} alt="" />}>
        Sprinkle the finely chopped <b>white onions</b> and <b>cilantro</b> on
        the other half of the tortilla.
      </Text>,
      <Text extra={<MethodImage src={image14} alt="" />}>
        Carefully <b>fold the tortilla over</b> to create your taco. Press it
        lightly with a spatula to ensure it holds together.
      </Text>,
      <Text>
        Let the taco cook for about a minute or until the{" "}
        <b>underside is crispy</b>, then flip and repeat on the other side.
      </Text>,
      <Text
        extra={
          <>
            <MethodImage src={image18} alt="" />
            <MethodImage src={image15} alt="" />
          </>
        }
      >
        <b>Transfer the crispy taco to a serving plate</b>. Garnish with some
        lime wedges, an additional sprinkle of fresh cilantro and white onion
        for an extra burst of flavor.
        <br />
        <br />
        Before taking a bite, <b>dip the edge of your taco</b> into the reserved
        consommé for an added depth of taste.
        <br />
        <br />
        Enjoy the savory layers of your homemade birria taco, as they deliver a
        satisfying crunch with every bite!
      </Text>,
    ],
  },
];

export default function Birria() {
  return (
    <Page
      metaTitle="Birria tacos"
      description="These tacos are a standout in the world of Mexican cuisine. At the heart of this recipe is the slow-cooked meat, steeped in the sweetness of Guajillo chilies."
      image={metaImage}
    >
      <Post
        title="Birria tacos"
        heroImage={heroImage}
        ingredients={
          <Ingredients
            excludeWeight
            ingredientSuffix="taco"
            ingredients={INGREDIENTS}
            initialValue={8}
            additionalMeta={
              <div className="flex gap-4">
                <Badge value="2-3h" label="Cook time" />
                <Badge value="5h" label="Total time" />
              </div>
            }
          />
        }
        method={<Method recipeMethod={STEPS} />}
        description={
          <>
            <Text variant="ingress">
              Hailing from Tijuana, these tacos are a standout in the world of
              Mexican cuisine. At the heart of this recipe is the slow-cooked
              meat, steeped in the sweetness of Guajillo chilies.
            </Text>
            <Text variant="ingress">
              Simple in preparation yet complex in flavor, these tacos are
              perfect for anyone looking to explore authentic regional dishes.
              The highlight of this dish is the final step where the taco is
              dipped in its rich consommé, enhancing its taste and texture
            </Text>
          </>
        }
      />
    </Page>
  );
}
