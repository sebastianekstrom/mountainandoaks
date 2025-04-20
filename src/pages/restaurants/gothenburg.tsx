import React from "react";
import metaImage from "public/images/restaurants/gothenburg/metaImage.jpg";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";
import { RESTAURANTS } from "../../constants/restaurants/gothenburg";

export const getStaticProps = async () => {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
};

export default function Gothenburg({ mapboxKey }: { mapboxKey: string }) {
  return (
    <RestaurantCity
      restaurants={RESTAURANTS}
      cityName="Gothenburg"
      description="A carefully curated list of a few selected restaurants we've visited or wish to visit in Gothenburg."
      metaImage={metaImage}
      mapboxKey={mapboxKey}
    />
  );
}
