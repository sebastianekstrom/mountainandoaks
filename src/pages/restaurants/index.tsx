import React from "react";

import Image from "next/image";
import { Page } from "components/Page/Page";

import Link from "next/link";

import { Text } from "components/Text/Text";
import stockholmImage from "public/images/restaurants/stockholm/metaImage.jpg";
import newYorkImage from "public/images/restaurants/new-york/metaImage.jpg";
import { RESTAURANTS as STOCKHOLM_RESTAURANTS } from "../../constants/restaurants/stockholm";
import { RESTAURANTS as NEW_YORK_RESTAURANTS } from "../../constants/restaurants/new-york";

interface CityCard {
  name: string;
  slug: string;
  image: any;
  count: number;
}

export default function RestaurantsHome() {
  const cities: CityCard[] = [
    {
      name: "Stockholm",
      slug: "stockholm",
      image: stockholmImage,
      count: STOCKHOLM_RESTAURANTS.length,
    },
    {
      name: "New York",
      slug: "new-york",
      image: newYorkImage,
      count: NEW_YORK_RESTAURANTS.length,
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <article key={city.slug} className="flex mb-6 flex-col">
              <Link
                href={`/restaurants/${city.slug}`}
                className="w-full h-full"
                tabIndex={-1}
              >
                <Image
                  alt=""
                  src={city.image}
                  className="w-full h-[204px] object-cover"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                  quality={100}
                />
                <Text variant="h4" classNames="mt-2">
                  {city.name}
                </Text>
                <Text variant="caption">{city.count} restaurants</Text>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Page>
  );
}
