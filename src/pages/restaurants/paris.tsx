import React from "react";
import metaImage from "public/images/restaurants/paris/metaImage.jpg";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";
import { RESTAURANTS } from "../../constants/restaurants/paris";

export const getStaticProps = async () => {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
};

export default function Paris({ mapboxKey }: { mapboxKey: string }) {
  return (
    <RestaurantCity
      restaurants={RESTAURANTS}
      cityName="Paris"
      description="A carefully curated list of a few selected restaurants we've visited or wish to visit in Paris."
      metaImage={metaImage}
      mapboxKey={mapboxKey}
    />
  );
}
