import React from "react";
import metaImage from "public/images/restaurants/toronto/metaImage.jpg";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";
import { RESTAURANTS } from "../../constants/restaurants/toronto";

export const getStaticProps = async () => {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
};

export default function Toronto({ mapboxKey }: { mapboxKey: string }) {
  return (
    <RestaurantCity
      restaurants={RESTAURANTS}
      cityName="Toronto"
      description="A carefully curated list of a few selected restaurants we've visited or wish to visit in Toronto."
      metaImage={metaImage}
      mapboxKey={mapboxKey}
    />
  );
}
