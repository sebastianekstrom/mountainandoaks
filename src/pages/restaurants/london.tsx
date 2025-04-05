import React from "react";
import metaImage from "public/images/restaurants/stockholm/metaImage.jpg";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";
import { RESTAURANTS } from "../../constants/restaurants/london";

export const getStaticProps = async () => {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
};

export default function London({ mapboxKey }: { mapboxKey: string }) {
  return (
    <RestaurantCity
      restaurants={RESTAURANTS}
      cityName="London"
      description="A carefully curated list of a few selected restaurants we've visited or wish to visit in London."
      metaImage={metaImage}
      mapboxKey={mapboxKey}
    />
  );
}
