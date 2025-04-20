import Image from "next/image";
import { Text } from "components/Text/Text";
import type { Restaurant } from "../../../constants/restaurants/types";

interface RestaurantCardProps {
  restaurant: Restaurant;
  isCompactMode: boolean;
  viewMode: "map" | "grid";
  index: number;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  isCompactMode,
  viewMode,
  index,
}) => {
  const hasRatings = restaurant.ratings?.["m&o"] || restaurant.ratings;

  return (
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

          {hasRatings && (
            <div className="flex justify-between gap-3 items-center">
              {restaurant.ratings?.["m&o"] && (
                <div className="flex items-center justify-center gap-1">
                  <Image
                    width={140}
                    height={56.6}
                    className="w-[30px] lg:w-[20px] h-auto"
                    src="/images/misc/logo-squircle.svg"
                    alt=""
                    title="Rating from Mountain & Oaks"
                  />
                  <Text variant="badge">{restaurant.ratings?.["m&o"]}/10</Text>
                </div>
              )}
              {restaurant.ratings?.michelin && (
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
              )}
            </div>
          )}
        </div>
      </a>

      {restaurant.chefs && (
        <div className="mb-2 mt-4">
          <Text variant="h5" classNames="mb-1 mt-4">
            Chefs
          </Text>
          <div
            className={`flex flex-col ${
              restaurant.chefs.length > 1 ? "gap-2" : ""
            }`}
          >
            {restaurant.chefs?.map((chef) => (
              <div key={chef.name}>
                <Text key={chef.name}>{chef.name}</Text>
                {chef.description && (
                  <Text variant="badge">{chef.description}</Text>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mb-2">
        <Text variant="h5" classNames="mb-1 mt-4">
          About
        </Text>
        <Text>{restaurant.description}</Text>
      </div>
    </div>
  );
};
