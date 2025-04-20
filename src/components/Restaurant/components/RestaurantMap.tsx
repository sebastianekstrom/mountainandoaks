import type { RefObject } from "react";
import { default as MapBox, Marker } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import Image from "next/image";
import { Text } from "components/Text/Text";
import type { Restaurant } from "../../../constants/restaurants/types";
import "mapbox-gl/dist/mapbox-gl.css";

interface RestaurantMapProps {
  mapRef: RefObject<MapRef | null>;
  restaurants: Restaurant[];
  mapHeight: number;
  sectionRefs: RefObject<(HTMLDivElement | null)[]>;
  scrollContainerRef: RefObject<HTMLDivElement>;
  flyToLocation: ({
    longitude,
    latitude,
  }: { longitude: number; latitude: number }) => void;
  mapboxKey?: string;
}

export const RestaurantMap: React.FC<RestaurantMapProps> = ({
  mapRef,
  restaurants,
  mapHeight,
  sectionRefs,
  scrollContainerRef,
  flyToLocation,
  mapboxKey,
}) => {
  return (
    <MapBox
      ref={mapRef as any}
      mapboxAccessToken={mapboxKey || process.env.NEXT_PUBLIC_MAPBOX_KEY || ""}
      initialViewState={{
        latitude: restaurants[0].coordinates.latitude,
        longitude: restaurants[0].coordinates.longitude,
        zoom: 14,
      }}
      style={{ width: "100%", height: mapHeight }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {restaurants.map((restaurant, index) => {
        const latitude = restaurant.coordinates.latitude;
        const longitude = restaurant.coordinates.longitude;
        return (
          <button
            key={restaurant.name}
            aria-label={restaurant.name}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              flyToLocation({
                longitude,
                latitude,
              });
              const section = sectionRefs.current?.[index];

              if (section && scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const sectionTop = section.offsetTop;
                container.scrollTo({
                  top: sectionTop,
                  behavior: "instant",
                });
              }
            }}
          >
            <Marker longitude={longitude} latitude={latitude} anchor="bottom">
              <div className="bg-brand flex text-brand-secondary px-2 py-1 gap-2 items-center rounded-sm relative">
                <Image
                  width={140}
                  height={56.6}
                  className="w-[10px] h-auto fill-brand-secondary"
                  src="/images/misc/icon-food.svg"
                  alt=""
                />
                <Text variant="badge" classNames="text-brand-secondary">
                  {restaurant.name}
                </Text>
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-bg-brand">
                  <Image
                    width={140}
                    height={56.6}
                    className="w-[20px] h-auto"
                    src="/images/misc/icon-chevron.svg"
                    alt=""
                  />
                </div>
              </div>
            </Marker>
          </button>
        );
      })}
    </MapBox>
  );
};
