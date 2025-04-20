import { useEffect, useRef, useState } from "react";
import { default as MapBox, Marker } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import Image from "next/image";
import { Page } from "components/Page/Page";
import { Text } from "components/Text/Text";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Restaurant } from "../../constants/restaurants/types";
import { FilterButtons } from "components/FilterButtons/FilterButtons";
import { MapPinIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";

interface RestaurantCityProps {
  restaurants: Restaurant[];
  cityName: string;
  description: string;
  metaImage: any;
  mapboxKey: string;
}

type ViewMode = "map" | "grid";

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
  const [viewMode, setViewMode] = useState<ViewMode>("map");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const isCompactMode = isMobile && viewMode === "map";

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      return mobile;
    };

    const updateMapHeight = () => {
      const mobile = checkIsMobile();
      setMapHeight(mobile ? 200 : 600);
    };

    const updateViewMode = () => {
      const mobile = checkIsMobile();
      setViewMode(mobile ? "grid" : "map");
    };

    updateMapHeight();
    updateViewMode();

    const handleResize = () => {
      updateMapHeight();
      updateViewMode();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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

    if (viewMode === "map") {
      for (const section of sectionRefs.current) {
        if (section) observer.observe(section);
      }
    }

    return () => {
      for (const section of sectionRefs.current) {
        if (section) observer.unobserve(section);
      }
    };
  }, [filteredRestaurants, flyEaglesFly, viewMode]);

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

  const handleViewModeChange = (newMode: ViewMode) => {
    setViewMode(newMode);
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

  const renderRestaurantCard = (restaurant: Restaurant, index: number) => {
    const hasRatings = restaurant.ratings?.["m&o"] || restaurant.ratings;
    return (
      <div
        key={restaurant.name}
        ref={(el) => {
          sectionRefs.current[index] = el;
        }}
        className={`${index !== 0 && viewMode === "map" ? "py-2" : ""} ${
          viewMode === "grid" ? "mb-4" : ""
        }`}
      >
        <div>
          <a href={restaurant.website}>
            <div className="relative">
              <Image
                width={190}
                height={400}
                className={`w-full object-cover mb-2 ${
                  isCompactMode ? "h-[120px]" : "h-[190px]"
                }`}
                src={restaurant.image}
                key={`${restaurant.name}-image`}
                alt=""
                quality={100}
                priority={index === 0}
                placeholder="blur"
              />
            </div>
            <div className="flex items-center justify-between">
              <Text variant="h4" classNames="relative top-[2px]">
                {restaurant.name}
              </Text>

              {hasRatings ? (
                <div className="flex justify-between gap-3 items-center">
                  {restaurant.ratings?.["m&o"] ? (
                    <div className="flex items-center justify-center gap-1">
                      <Image
                        width={140}
                        height={56.6}
                        className="w-[30px] lg:w-[20px] h-auto"
                        src="/images/misc/logo-squircle.svg"
                        alt=""
                        title="Rating from Mountain & Oaks"
                      />
                      <Text variant="badge">
                        {restaurant.ratings?.["m&o"]}/10
                      </Text>
                    </div>
                  ) : null}
                  {restaurant.ratings?.michelin ? (
                    <>
                      {restaurant.ratings.michelin === "Bib" ? (
                        <div className="relative top-[-1px]">
                          <Image
                            width={20}
                            height={20}
                            className="w-[25px] lg:w-[20px] h-auto"
                            src="/images/misc/bib-gourmand.png"
                            alt=""
                            title="Bib Gourmand: good quality, good value cooking"
                          />
                        </div>
                      ) : (
                        <div className="flex gap-[3px]">
                          {Array.from({
                            length: restaurant.ratings.michelin ?? 0,
                          }).map((_, starIndex) => {
                            const stars = restaurant.ratings?.michelin ?? 0;
                            return (
                              <Image
                                width={20}
                                height={20}
                                className="w-[25px] lg:w-[20px] h-auto"
                                src="/images/misc/michelin-star.svg"
                                alt=""
                                title={`${stars} Michelin star${
                                  stars === 1 ? "" : "s"
                                }`}
                                key={`${restaurant.name}-star-${starIndex + 1}`}
                              />
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : null}
                </div>
              ) : null}
            </div>
          </a>

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
                        <Text variant="badge">{chef.description}</Text>
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
        </div>
        {viewMode === "map" && (
          <span className="bg-separator h-[2px] w-full block mt-8 mb-6" />
        )}
      </div>
    );
  };

  return (
    <Page
      metaTitle={`Restaurants / ${cityName}`}
      description={description}
      image={metaImage}
    >
      <div
        className={`lg:mt-0 lg:mb-6 text-center lg:text-left ${
          isCompactMode ? "mt-0 mb-4" : "mt-4 mb-8"
        }`}
      >
        <Text variant="h4">{cityName}</Text>
        {!isCompactMode && <Text>{description}</Text>}
        <div className="flex mt-2 justify-center md:justify-start flex-wrap gap-2 md:gap-8">
          {visitedCount > 0 && (
            <FilterButtons
              filters={filterLabels}
              onFilterChange={handleFilterChange}
              activeFilter={filter}
            />
          )}

          <div className="flex border border-brand rounded-md overflow-hidden">
            <button
              type="button"
              onClick={() => handleViewModeChange("map")}
              className={`px-3 py-1 text-sm ${
                viewMode === "map" ? "bg-brand" : "bg-brand-secondary"
              }`}
            >
              <div className="flex items-center gap-[2px]">
                <MapPinIcon
                  className={`h-4 w-4 ${
                    viewMode === "map" ? "text-white" : "text-black"
                  }`}
                  aria-hidden="true"
                />
                <Text
                  variant="badge"
                  classNames={`${
                    viewMode === "map" ? "text-white" : "text-black"
                  }`}
                >
                  Map
                </Text>
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleViewModeChange("grid")}
              className={`px-3 py-1 text-sm ${
                viewMode === "grid" ? "bg-brand" : "bg-brand-secondary"
              }`}
            >
              <div className="flex items-center gap-[2px]">
                <ViewColumnsIcon
                  className={`h-4 w-4 ${
                    viewMode === "grid" ? "text-white" : "text-black"
                  }`}
                  aria-hidden="true"
                />
                <Text
                  variant="badge"
                  classNames={`${
                    viewMode === "map" ? "text-black" : "text-white"
                  }`}
                >
                  List
                </Text>
              </div>
            </button>
          </div>
        </div>
      </div>

      {viewMode === "map" ? (
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
                  aria-label={restaurant.name}
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
              {filteredRestaurants.map((restaurant, index) =>
                renderRestaurantCard(restaurant, index),
              )}
            </section>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredRestaurants.map((restaurant, index) =>
            renderRestaurantCard(restaurant, index),
          )}
        </div>
      )}
    </Page>
  );
};
