import React from "react";
import metaImage from "public/images/restaurants/stockholm/metaImage.jpg";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";
import { RESTAURANTS } from "../../constants/restaurants/ostersund";

export const getStaticProps = async () => {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
};

export default function Ostersund({ mapboxKey }: { mapboxKey: string }) {
  return (
    <RestaurantCity
      restaurants={RESTAURANTS}
      cityName="Östersund"
      description="A carefully curated list of a few selected restaurants we've visited or wish to visit in Östersund."
      metaImage={metaImage}
      mapboxKey={mapboxKey}
    />
  );
}
