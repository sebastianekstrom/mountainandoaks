import { useEffect, useRef, useState } from "react";
import { default as MapBox, Marker } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import Image from "next/image";
import { Page } from "components/Page/Page";
import { Text } from "components/Text/Text";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Restaurant } from "../../constants/restaurants/types";
import { FilterButtons } from "components/FilterButtons/FilterButtons";

interface RestaurantCityProps {
  restaurants: Restaurant[];
  cityName: string;
  description: string;
  metaImage: any;
  mapboxKey: string;
}

export const RestaurantCity: React.FC<RestaurantCityProps> = ({
  restaurants,
  cityName,
  description,
  metaImage,
  mapboxKey,
}) => {
  const mapRef = useRef<MapRef>();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapHeight, setMapHeight] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const updateMapHeight = () => {
      setMapHeight(window.innerWidth < 1024 ? 150 : 600);
    };

    setTimeout(() => {
      updateMapHeight();
    }, 600);

    window.addEventListener("resize", updateMapHeight);

    return () => {
      window.removeEventListener("resize", updateMapHeight);
    };
  }, []);

  const flyEaglesFly = ({
    longitude,
    latitude,
  }: { longitude: number; latitude: number }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 350,
      linear: false,
      curve: 0,
    });
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (filter === "all") return true;
    if (filter === "visited") return restaurant.ratings?.["m&o"] !== undefined;
    if (filter === "not_visited")
      return restaurant.ratings?.["m&o"] === undefined;
    return true;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1 && filteredRestaurants[index]) {
              const { longitude, latitude } =
                filteredRestaurants[index].coordinates;
              flyEaglesFly({ longitude, latitude });
            }
          }
        }
      },
      {
        root: scrollContainerRef.current,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.8,
      },
    );

    for (const section of sectionRefs.current) {
      if (section) observer.observe(section);
    }

    return () => {
      for (const section of sectionRefs.current) {
        if (section) observer.unobserve(section);
      }
    };
  }, [filteredRestaurants, flyEaglesFly]);

  useEffect(() => {
    // Update sectionRefs to match the filtered list
    sectionRefs.current = sectionRefs.current.slice(
      0,
      filteredRestaurants.length,
    );
  }, [filteredRestaurants.length]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    // Recalculate scroll position after filtering
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const allCount = restaurants.length;
  const visitedCount = restaurants.filter(
    (restaurant) => restaurant.ratings?.["m&o"] !== undefined,
  ).length;
  const notVisitedCount = restaurants.filter(
    (restaurant) => restaurant.ratings?.["m&o"] === undefined,
  ).length;

  const filterLabels = [
    { label: `All (${allCount})`, value: "all", disabled: allCount === 0 },
    {
      label: `Visited (${visitedCount})`,
      value: "visited",
      disabled: visitedCount === 0,
    },
    {
      label: `Not visited (${notVisitedCount})`,
      value: "not_visited",
      disabled: notVisitedCount === 0,
    },
  ];

  if (!mapHeight || filteredRestaurants.length === 0) return null;

  return (
    <Page
      metaTitle={`Restaurants / ${cityName}`}
      description={description}
      image={metaImage}
    >
      <div className="mb-8 mt-4 lg:mt-0 lg:mb-6 text-center lg:text-left">
        <Text variant="h4">{cityName}</Text>
        <Text>{description}</Text>
        <div className="flex mt-2 justify-center md:justify-start">
          <FilterButtons
            filters={filterLabels}
            onFilterChange={handleFilterChange}
            activeFilter={filter}
          />
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row">
        <MapBox
          ref={mapRef as any}
          mapboxAccessToken={mapboxKey}
          initialViewState={{
            latitude: filteredRestaurants[0].coordinates.latitude,
            longitude: filteredRestaurants[0].coordinates.longitude,
            zoom: 14,
          }}
          style={{ width: "100%", height: mapHeight }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {filteredRestaurants.map((restaurant, index) => {
            const latitude = restaurant.coordinates.latitude;
            const longitude = restaurant.coordinates.longitude;
            return (
              <button
                key={restaurant.name}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  flyEaglesFly({
                    longitude,
                    latitude,
                  });
                  const section = sectionRefs.current[index];

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
                <Marker
                  longitude={longitude}
                  latitude={latitude}
                  anchor="bottom"
                >
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

        <div
          className="overflow-auto overflow-y-scroll flex h-[600px] mt-4 lg:mt-0"
          ref={scrollContainerRef}
        >
          <section className="w-full lg:w-[400px] lg:ml-4 lg:pr-4">
            {filteredRestaurants.map((restaurant, index) => {
              return (
                <div
                  key={restaurant.name}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  className={index !== 0 ? "py-2" : ""}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <Text variant="h4" classNames="mb-2">
                        {restaurant.name}
                      </Text>
                    </div>
                    <div className="relative">
                      <Image
                        width={190}
                        height={400}
                        className="w-full h-[190px] object-cover mb-2"
                        src={restaurant.image}
                        key={`${restaurant.name}-image`}
                        alt=""
                        quality={100}
                      />
                    </div>
                    <div className="mb-2 flex justify-between">
                      {restaurant.ratings?.["m&o"] ? (
                        <div className="flex items-center justify-center gap-1">
                          <Image
                            width={140}
                            height={56.6}
                            className="w-[30px] lg:w-[20px] h-auto"
                            src="/images/misc/logo-squircle.svg"
                            alt=""
                          />
                          <Text variant="badge">
                            {restaurant.ratings?.["m&o"]}/10
                          </Text>
                        </div>
                      ) : null}
                      {restaurant.ratings ? (
                        <div>
                          {restaurant.ratings.michelin === "Bib" ? (
                            <Image
                              width={20}
                              height={20}
                              className="w-[25px] lg:w-[20px] h-auto"
                              src="/images/misc/bib-gourmand.png"
                              alt="Bib Gourmand"
                              title="Bib Gourmand: good quality, good value cooking"
                            />
                          ) : (
                            <div className="flex gap-[3px]">
                              {Array.from({
                                length: restaurant.ratings.michelin ?? 0,
                              }).map((_, starIndex) => (
                                <Image
                                  width={20}
                                  height={20}
                                  className="w-[25px] lg:w-[20px] h-auto"
                                  src="/images/misc/michelin-star.svg"
                                  alt="Michelin star"
                                  key={`${restaurant.name}-star-${
                                    starIndex + 1
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                    {restaurant.chefs ? (
                      <div className="mb-2 mt-4">
                        <Text variant="h5" classNames="mb-1 mt-4">
                          Chefs
                        </Text>
                        <div
                          className={`flex flex-col ${
                            restaurant.chefs.length > 1 ? "gap-2" : ""
                          }`}
                        >
                          {restaurant.chefs?.map((chef) => {
                            return (
                              <div key={chef.name}>
                                <Text key={chef.name}>{chef.name}</Text>
                                {chef.description ? (
                                  <Text variant="badge">
                                    {chef.description}
                                  </Text>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                    <div className="mb-2">
                      <Text variant="h5" classNames="mb-1 mt-4">
                        About
                      </Text>
                      <Text>{restaurant.description}</Text>
                    </div>
                    <div className="mb-2">
                      <Text variant="h5" classNames="mb-1 mt-4">
                        Learn more
                      </Text>
                      <Text>
                        <a href={restaurant.website}>Website</a>
                      </Text>
                    </div>
                  </div>
                  <span className="bg-separator h-[2px] w-full block mt-8 mb-6" />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </Page>
  );
};
