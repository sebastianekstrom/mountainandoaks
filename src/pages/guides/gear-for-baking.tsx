import React from "react";

import Page from "components/Page";
import Link from "components/Link";
import Post from "components/Post";
import Text from "components/Text";
import heroImage from "public/images/techniques/gear/thumbnails/tall.jpg";
import metaImage from "public/images/techniques/gear/thumbnails/meta.png";

import scale from "public/images/techniques/gear/entries/scale.jpg";
import standMixer from "public/images/techniques/gear/entries/stand-mixer.jpg";
import coolingRack from "public/images/techniques/gear/entries/cooling-rack.jpg";
import doughScraper from "public/images/techniques/gear/entries/dough-scraper.jpg";
import pizzaSteel from "public/images/techniques/gear/entries/pizza-steel.jpg";
import doughContainer from "public/images/techniques/gear/entries/dough-container.jpg";
import foodContainer from "public/images/techniques/gear/entries/food-containers.jpg";
import dutchOven from "public/images/techniques/gear/entries/dutch-oven.jpg";
import razor from "public/images/techniques/gear/entries/razor.jpg";
import labeling from "public/images/techniques/gear/entries/labeling.jpg";
import label from "public/images/techniques/gear/entries/label.jpg";

import Image from "next/image";

const Entry = ({
  title,
  children,
  image,
}: {
  title: string;
  children: React.ReactNode;
  image: any;
}) => {
  return (
    <div className="lg:ml-10 grid grid-cols-12 gap-4 md:gap-12 lg:mt-12">
      <div className="col-span-12 md:col-span-8 lg:mr-20">
        <div className="mb-2">
          <Text variant="h3" anchorID={title}>
            {title}
          </Text>
        </div>
        {children}
      </div>
      <div className="col-span-12 md:col-span-4 mt-4 order-first md:order-last">
        <Image className="w-full h-auto " src={image} alt=""></Image>
      </div>
    </div>
  );
};

export default function GearForBaking() {
  return (
    <Page
      metaTitle="Gear for baking"
      description="The best gear to help you level up your baking game"
      image={metaImage}
    >
      <Post
        title="Gear for baking"
        heroImage={heroImage}
        description={
          <>
            <Text variant="ingress">
              You don't <i>need</i> any gear to bake bread or pizzas, but it can
              definitely help make it easier and more efficient. Here's my most
              used tools when I bake.
            </Text>

            <Text variant="ingress">
              This list contains links to products, these are <b>not</b>{" "}
              affiliate links, just products that I like to use.
            </Text>
          </>
        }
      >
        <div className="pt-8 lg:pt-20">
          <Text variant="h2" anchorID="Gear for baking">
            Gear for baking
          </Text>
          <Text>
            Essential gear for general baking; pizza, bread and everything in
            between
          </Text>
          <Entry title="Kitchen scale" image={scale}>
            <Text>
              If there's only one thing you should buy, <b>this is it</b>.
              Measuring your flour by dimension (cups or deciliters) will give
              you different results each time and baking is all about
              consistency. Also, any recipe maker worth their salt measures
              their ingredients in grams.
            </Text>
            <div className="mt-4" />
            <Text>
              The scale should measure at least down to the gram, but preferably
              as low as 0.1g which can be common when measuring dry yeast or
              salt.
            </Text>
            <div className="mt-4" />
            <Text>
              <b>What I use</b>:{" "}
              <Link href="https://ooni.com/products/ooni-dual-platform-digital-scales">
                Ooni Digital Scale
              </Link>
            </Text>
          </Entry>

          <Entry title="Stand mixer" image={standMixer}>
            <Text>
              I'm too old to knead dough with my hands, and also too lazy. Also
              making a brioche will make your hands all buttery for days. That's
              why I always use a stand mixer to do all the hard work for you.
              They are expensive though ($400 and up), so only buy one if you
              bake a lot.
            </Text>
            <div className="mt-4" />
            <Text>
              Also, if you decide to buy one, buy a good one.{" "}
              <b>There's basically only two brands worth buying</b> when it
              comes to amateur baking and it's the{" "}
              <Link href="https://www.kitchenaid.com/countertop-appliances/bundles/p.professional-5-plus-series-5-quart-bowl-lift-stand-mixer-with-flex-edge-beater-bundle.kvbkfbundleer.html?">
                KitchenAid
              </Link>{" "}
              or the{" "}
              <Link href="https://www.ankarsrum.com/us/product/assistent-original-ocean-blue-ob/">
                Ankarsrum
              </Link>
              .
            </Text>
            <div className="mt-4" />
            <Text>
              <b>What I use</b>:{" "}
              <Link href="https://www.kitchenaid.com/countertop-appliances/bundles/p.professional-5-plus-series-5-quart-bowl-lift-stand-mixer-with-flex-edge-beater-bundle.kvbkfbundleer.html?">
                KitchenAid 5 Quart Bowl
              </Link>
            </Text>
          </Entry>

          <Entry title="Dough scraper" image={doughScraper}>
            <Text>
              Dough is sticky, especially before you've developed enough gluten
              strength. A dough scraper is a good way to keep your hands and
              your dough containers nice and clean. I recommend getting one in
              plastic to use to get all the dough out of the container. And also
              a metal one to use for shaping the doughs.
            </Text>
            <div className="mt-4" />
            <Text>
              <b>What I use</b>:{" "}
              <Link href="https://www.bakerybits.co.uk/flexible-dough-scraper">
                Bakery Bits dough scraper
              </Link>{" "}
              and tons of other variants. You can never have enough of dough
              scrapers
            </Text>
          </Entry>

          <Entry title="Cooling rack" image={coolingRack}>
            <Text>
              After baking a pizza or bread it unfortunately needs to cool for a
              bit (3-4 minutes for pizza, 30 minutes for bread) before you can
              devour it. If you immediately put the pizza or bread on a flat
              surface the bottom can become soggy. To prevent this you can put
              it on a cooling rack!
            </Text>
          </Entry>

          <div className="mt-12 lg:mt-20" />

          <Text variant="h2" anchorID="Pizza gear">
            Pizza gear
          </Text>
          <Text>Tools that'll help you level up your pizza game</Text>

          <Entry title="Pizza steel" image={pizzaSteel}>
            <Text>
              As mentioned in my{" "}
              <Link href="/guides/baking-pizza-in-home-oven">
                baking pizza in a home
              </Link>{" "}
              guide a baking steel is essential if you want to make <i>great</i>{" "}
              pizzas. Seriously,{" "}
              <b>
                this is the one thing that'll make the most difference in your
                pizza baking
              </b>
              . It'll set you back a few bucks ($70 -$200) but it's totally
              worth it.
            </Text>
            <div className="mt-4" />
            <Text>
              <b>What I use</b>:{" "}
              <Link href="https://gourmetstal.se/product/gourmetstal-norrland-paket/">
                Gourmetstål
              </Link>
            </Text>
          </Entry>

          <Entry title="Dough containers" image={doughContainer}>
            <Text>
              Many pizza doughs need to cold proof in the fridge for a few hours
              up to a few days. Having proper containers for this will help your
              fridge not to become a mess.
            </Text>
            <div className="mt-4" />
            <Text>
              <b>What I use</b>:{" "}
              <Link href="https://ooni.com/collections/most-popular/products/ooni-stack">
                Ooni Stack
              </Link>
            </Text>
          </Entry>

          <Entry title="Food containers" image={foodContainer}>
            <Text>
              Mise en place is le shit, and prepping all your toppings neatly in
              containers before baking the pizza will make everything so much
              smoother.
            </Text>
            <div className="mt-4" />
            <Text>
              <b>What I use</b>: Various sizes of{" "}
              <Link href="https://www.kitchenlab.se/k/matlagning/formar-kantiner/kantiner/plastkantiner/#{%22FVarum%22:%22Patina%22}">
                Patina
              </Link>
            </Text>
          </Entry>

          <Entry title="Food labeling" image={labeling}>
            <div className="mt-4 mb-4">
              <Image className="w-auto h-full" src={label} alt=""></Image>
            </div>

            <Text>
              When making prep for pizzas, or food in general, I always write a
              label on the container with <b>what it contains</b>, and{" "}
              <b>when it was prepared</b>. This makes it easier during the bake,
              especially if you're making a lot of different pizzas. And if
              there's any leftover ingredients you'll know if they're good or
              not due to the date.
            </Text>

            <div className="mt-4" />
            <Text>
              <b>What I use</b>: Masking tape and a Sharpie
            </Text>
          </Entry>

          <div className="mt-12 lg:mt-20" />

          <Text variant="h2" anchorID="Bread gear">
            Bread gear
          </Text>
          <Text>Tools for leveling up your bread</Text>

          <Entry title="Dutch oven" image={dutchOven}>
            <Text>
              If you don't have a fancy oven that can produce steam you will
              need a Dutch oven to be able to get a proper rise on your bread.
              This is because the Dutch oven captures all the steam that the
              dough evaporates and traps it, thus delaying the crust of the
              bread to form too quickly, letting the bread rise as much as
              possible. <br />
              <br />I know <b>Le Creuset</b> is the bomb, but don't buy their
              Dutch oven just for baking, it's way too expensive.
            </Text>
            <div className="mt-4" />
            <Text>
              <b>What I use</b>:{" "}
              <Link href="https://www.lodgecastiron.com/product/cast-iron-combo-cooker?sku=LCC3">
                Lodge Combo Cooker
              </Link>
            </Text>
          </Entry>

          <Entry title="Razor blade" image={razor}>
            <Text>
              When making bread you often need to score it. This is because you
              want to control the rise of the dough so it doesn't explode. Some
              people use a knife for this, which is not aaaaaanywhere as sharp
              as it needs to be. Buy a pair of razor blades and thank me later.
            </Text>
            <div className="mt-4" />
            <Text>
              <b>What I use</b>:{" "}
              <Link href="https://www.gents.se/derby-dubbelrakblad?srsltid=AYJSbAf97xpPqs3bTSsB76z99x8EUciWLosNSaDuhN1LUaFs-f0VxQyRCi8">
                Derby
              </Link>{" "}
              but you can literally buy any razor blade at all
            </Text>
          </Entry>
        </div>
      </Post>
    </Page>
  );
}
