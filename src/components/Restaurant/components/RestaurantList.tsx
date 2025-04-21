import type { RefObject } from "react";
import { RestaurantCard } from "./RestaurantCard";
import type { Restaurant } from "../../../constants/restaurants/types";
import { Text } from "components/Text/Text";

interface RestaurantListProps {
  restaurants: Restaurant[];
  viewMode: "map" | "grid";
  isCompactMode: boolean;
  sectionRefs: RefObject<(HTMLDivElement | null)[]>;
  scrollContainerRef: RefObject<HTMLDivElement>;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  viewMode,
  isCompactMode,
  sectionRefs,
  scrollContainerRef,
}) => {
  if (restaurants.length === 0) {
    if (viewMode === "map") {
      return (
        <div className="overflow-auto overflow-y-scroll flex h-[600px] mt-4 lg:mt-0">
          <section className="w-full lg:w-[500px] lg:ml-4 lg:pr-4">
            <div className="text-center">
              <Text variant="h4">No restaurants found</Text>
            </div>
          </section>
        </div>
      );
    }
    return (
      <div className="text-center">
        <Text variant="h4">No restaurants found</Text>
      </div>
    );
  }

  if (viewMode === "map") {
    return (
      <div
        className="overflow-auto overflow-y-scroll flex h-[600px] mt-4 lg:mt-0"
        ref={scrollContainerRef}
      >
        <section className="w-full lg:w-[500px] lg:ml-4 lg:pr-4">
          {restaurants.map((restaurant, index) => (
            <div
              key={restaurant.name}
              ref={(el) => {
                if (sectionRefs.current) {
                  sectionRefs.current[index] = el;
                }
              }}
              className={`${index !== 0 ? "py-2" : ""}`}
            >
              <RestaurantCard
                restaurant={restaurant}
                isCompactMode={isCompactMode}
                index={index}
              />
              <span className="bg-separator h-[2px] w-full block mt-8 mb-6" />
            </div>
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {restaurants.map((restaurant, index) => (
        <div
          key={restaurant.name}
          ref={(el) => {
            if (sectionRefs.current) {
              sectionRefs.current[index] = el;
            }
          }}
          className="mb-4"
        >
          <RestaurantCard
            restaurant={restaurant}
            isCompactMode={isCompactMode}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};
