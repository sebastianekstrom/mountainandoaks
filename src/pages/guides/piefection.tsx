import React from "react";

import image4 from "public/images/techniques/piefection/danger.jpg";
import image1 from "public/images/techniques/piefection/gram.jpg";
import image2 from "public/images/techniques/piefection/prep.jpg";
import image3 from "public/images/techniques/piefection/steel.jpg";
import metaImage from "public/images/techniques/piefection/thumbnails/meta.png";
import heroImage from "public/images/techniques/piefection/thumbnails/tall.jpg";

import { Link } from "components/Link/Link";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const STEPS_DOS = [
  <>
    <Text variant="h4" anchorID="Avoid pizza Armageddon">
      Avoid pizza Armageddon
    </Text>
    <Text>
      Hosting a pizza party can feel like herding cats, especially with a
      smorgasbord of toppings and pizza varieties on the menu. To dodge a
      kitchen catastrophe, prep your toppings ahead of time, ideally the day
      before. This will save you time and allow you to mingle with guests,
      rather than becoming a prisoner in your own kitchen.
    </Text>
    <br />
    <Text extra={<MethodImage src={image2} alt="" />}>
      Almost everything can be prepared the day before, grate the cheese, make
      the tomato sauce, slice sausages, and chop the onions. Use plastic
      containers, masking tape, and a Sharpie as your organizational sidekicks.
    </Text>
  </>,
  <>
    <Text variant="h4" anchorID="Steel Your Resolve (and Your Pizza)">
      Steel Your Resolve (and Your Pizza)
    </Text>
    <Text>
      The pizza steel is a far superior choice to the pizza stone. The pizza
      stone just doesn't cut it when making a pizza in a home oven. The pizza
      steel offers superb heat retention, ensuring a crispy, golden-brown crust
      that'll have guests swooning.
    </Text>
    <br />
    <Text extra={<MethodImage src={image3} alt="" />}>
      You can read more tips on how to perfect baking a pizza in your home oven
      in my guide <Link href="/guides/baking-pizza-in-home-oven">here</Link>.
    </Text>
  </>,
  <>
    <Text variant="h4" anchorID="Oven lovin' requires preheatin'">
      Oven lovin' requires preheatin'
    </Text>
    <Text>
      Baking pizza is a high-stakes game of heat. Using a home oven? Preheat it
      for at least an hour, not less. Trust me, I've done that mistake.
    </Text>
    <br />
    <Text>
      Let's say it together now: one hour, 60 minutes, or 3,600 seconds.
    </Text>
  </>,
  <>
    <Text variant="h4" anchorID="Pre-bake to avoid heartache">
      Pre-bake to avoid heartache
    </Text>
    <Text>
      For optimal results in a home oven, pre-bake your pizza. First, stretch
      out the dough and add the tomato sauce before placing it in the oven for
      half the total baking time. Then, remove the pizza, add the toppings, and
      return it to the oven for the remaining time. This method ensures your
      cheese doesn't overcook and resemble an oily crime scene.
    </Text>
    <br />
    <Text>
      You can read more tips on how to perfect baking a pizza in your home oven
      in my guide <Link href="/guides/baking-pizza-in-home-oven">here</Link>.
    </Text>
  </>,
  <>
    <Text variant="h4" anchorID="Embrace the gram">
      Embrace the gram
    </Text>
    <Text extra={<MethodImage src={image1} alt="" />}>
      Baking demands precision, unlike casual cooking where you can freestyle
      like a culinary jazz musician. Measuring by volume (cups or deciliters) is
      a recipe for inconsistency.
    </Text>
    <br />
    <Text>
      Conduct a little experiment: weigh a cup or deciliter of flour multiple
      times and you'll see really fluctuating results. To achieve the oh so
      important consistency in your bakes, invest in a kitchen scale—preferably
      one with 0.1g precision. Accuracy is the name of the game.
    </Text>
  </>,
];

const STEPS_DONTS = [
  <>
    <Text variant="h4" anchorID="Overload the center">
      Overload the center
    </Text>
    <Text extra={<MethodImage src={image4} alt="" />}>
      Picture this: you've crafted the perfect pizza, only to overburden the
      center with an avalanche of toppings. When you slice that masterpiece, the
      floppy tip of the slice betrays you, causing a messy and frustrating
      eating experience. Remember, moderation is key—even for pizza toppings!
    </Text>
  </>,
  <>
    <Text variant="h4" anchorID="Turn your pizza into a saucy swamp">
      Turn your pizza into a saucy swamp
    </Text>
    <Text>
      Mise en place is le shit, but assembling a lineup of sauce-loaded pizzas
      before baking is a recipe for disaster. The longer your saucy pizza waits
      on the kitchen counter, the soggier the crust becomes which makes the
      dreaded peel-sticking phenomenon more likely. Keep it fresh and make your
      pizzas to order.
    </Text>
  </>,
  <>
    <Text variant="h4" anchorID="Fear the heat">
      Fear the heat
    </Text>
    <Text>
      A pizza with a pale, undercooked crust is a gastronomic tragedy. Fear not
      the golden-brown hues of a well-baked crust! Dough is tougher than you
      think, so give it some extra time to achieve that satisfying, crispy
      crunch.
    </Text>
  </>,
  <>
    <Text variant="h4" anchorID="Proof time panic">
      Proof time panic
    </Text>
    <Text>
      Don't stress about proof times when making pizza. Unlike its fickle
      cousin, bread dough, pizza dough is far more forgiving. An extra hour of
      proofing won't spell disaster for pizza party.
    </Text>
  </>,
];

export default function DosAndDonts() {
  return (
    <Page
      metaTitle="The Art of Pie-fection"
      description="A Saucy Guide to Pizza Do's and Don'ts"
      image={metaImage}
    >
      <Post
        title="The Art of Pie-fection: A Saucy Guide to Pizza Do's and Don'ts"
        heroImage={heroImage}
        description={
          <Text variant="ingress">
            Ah, pizza—the culinary equivalent of a warm hug, a high-five, and a
            victorious fist pump all rolled into one. However, making pizza
            comes with its own set of challenges, and I've made my fair share of
            mistakes along the way. To help you avoid the same pitfalls, I've
            compiled this list of do's and don'ts for your pizza-making journey.
          </Text>
        }
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 pt-8 lg:pt-20">
          <div className="lg:col-span-5"></div>

          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <Text variant="h2">Do's</Text>
            <Method completable={false} recipeMethod={STEPS_DOS} />

            <div className="mt-20">
              <Text variant="h2">Dont's</Text>
              <Method completable={false} recipeMethod={STEPS_DONTS} />
            </div>
          </div>
        </div>
      </Post>
    </Page>
  );
}
