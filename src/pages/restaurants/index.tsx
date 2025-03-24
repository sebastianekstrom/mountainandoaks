import React from "react";

import Image from "next/image";
import { Page } from "components/Page/Page";

import Link from "next/link";

import { Text } from "components/Text/Text";
import stockholmImage from "public/images/restaurants/stockholm/metaImage.jpg";
import { RESTAURANTS as STOCKHOLM_RESTAURANTS } from "../../constants/restaurants/stockholm";

export default function RestaurantsHome() {
  return (
    <Page
      metaTitle="Restaurants"
      description="A carefully curated list of a few selected restaurants we've visited or wish to visit"
      image={stockholmImage}
    >
      <div>
        <Text variant="h2" classNames="mb-4 max-w-[75%] mb-8 hidden lg:block">
          A carefully curated list of a few selected restaurants we've visited
          or wish to visit
        </Text>

        <Text variant="h4" classNames="mb-4 max-w-[75%] mb-8 lg:hidden mt-4">
          A carefully curated list of a few selected restaurants we've visited
          or wish to visit
        </Text>
        <article className="flex mb-6 flex-col lg:flex-row">
          <Link
            href="/restaurants/stockholm"
            className="w-full h-full lg:w-[340px] lg:h-[204px]"
            tabIndex={-1}
          >
            <Image
              alt=""
              src={stockholmImage}
              className="w-full h-full lg:w-[204] lg:h-[204] object-cover"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 25vw,
            25vw"
              quality={100}
            />
            <Text variant="h4" classNames="mt-2">
              Stockholm
            </Text>
            <Text variant="caption">
              {STOCKHOLM_RESTAURANTS.length} restaurants
            </Text>
          </Link>
        </article>
      </div>
    </Page>
  );
}
