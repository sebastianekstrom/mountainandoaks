import { useEffect, useRef, useState } from "react";
import type { MapRef } from "react-map-gl/mapbox";
import { Page } from "components/Page/Page";
import { Text } from "components/Text/Text";
import type { Restaurant } from "../../constants/restaurants/types";
import { RestaurantMap } from "./components/RestaurantMap";
import { RestaurantList } from "./components/RestaurantList";
import { RestaurantFilters } from "./components/RestaurantFilters";
import "mapbox-gl/dist/mapbox-gl.css";

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
  const mapRef = useRef<MapRef | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapHeight, setMapHeight] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("map");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const isCompactMode = isMobile && viewMode === "map";
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    window.addEventListener("resize", updateMapHeight);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updateMapHeight);
    };
  }, []);

  const flyToLocation = ({
    longitude,
    latitude,
  }: {
    longitude: number;
    latitude: number;
  }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 350,
      linear: false,
      curve: 0,
    });
  };

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    const ratingA = a.ratings?.["m&o"] ?? 0;
    const ratingB = b.ratings?.["m&o"] ?? 0;
    return ratingB - ratingA;
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredRestaurants = sortedRestaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (filter === "all") return matchesSearch;
    if (filter === "visited")
      return matchesSearch && restaurant.ratings?.["m&o"] !== undefined;
    if (filter === "not_visited")
      return matchesSearch && restaurant.ratings?.["m&o"] === undefined;
    return matchesSearch;
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
              flyToLocation({ longitude, latitude });
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
  }, [filteredRestaurants, viewMode, flyToLocation]);

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

        <RestaurantFilters
          filterLabels={filterLabels}
          filter={filter}
          viewMode={viewMode}
          onFilterChange={handleFilterChange}
          onViewModeChange={handleViewModeChange}
          visitedCount={visitedCount}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
      </div>

      {viewMode === "map" ? (
        <div className="relative flex flex-col lg:flex-row">
          {mapHeight ? (
            <RestaurantMap
              mapRef={mapRef}
              restaurants={filteredRestaurants}
              mapHeight={mapHeight}
              sectionRefs={sectionRefs}
              scrollContainerRef={scrollContainerRef}
              flyToLocation={flyToLocation}
              mapboxKey={mapboxKey}
            />
          ) : (
            <div className="w-full" />
          )}
          <RestaurantList
            restaurants={filteredRestaurants}
            viewMode={viewMode}
            isCompactMode={isCompactMode}
            sectionRefs={sectionRefs}
            scrollContainerRef={scrollContainerRef}
          />
        </div>
      ) : (
        <RestaurantList
          restaurants={filteredRestaurants}
          viewMode={viewMode}
          isCompactMode={isCompactMode}
          sectionRefs={sectionRefs}
          scrollContainerRef={scrollContainerRef}
        />
      )}
    </Page>
  );
};
