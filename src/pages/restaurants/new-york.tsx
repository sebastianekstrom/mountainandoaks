import React from "react";
import metaImage from "public/images/restaurants/new-york/metaImage.jpg";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";
import { RESTAURANTS } from "../../constants/restaurants/new-york";

export const getStaticProps = async () => {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
};

export default function NewYork({ mapboxKey }: { mapboxKey: string }) {
  return (
    <RestaurantCity
      restaurants={RESTAURANTS}
      cityName="New York"
      description="A carefully curated list of a few selected restaurants we've visited or wish to visit in New York."
      metaImage={metaImage}
      mapboxKey={mapboxKey}
    />
  );
}
