import Image from "next/image";
import { Text } from "components/Text/Text";
import { Rating } from "components/Rating/Rating";
import type { Restaurant } from "../../../constants/restaurants/types";

interface RestaurantCardProps {
  restaurant: Restaurant;
  isCompactMode: boolean;
  index: number;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  isCompactMode,
  index,
}) => {
  const getRatingsArray = () => {
    const ratings = [];

    // M&O rating always comes first if available
    if (restaurant.ratings?.["m&o"])
      ratings.push({
        source: "m&o" as const,
        value: restaurant.ratings["m&o"],
        reviewUrl: undefined,
      });

    if (restaurant.ratings?.michelin) {
      const michelinRating = restaurant.ratings.michelin;
      ratings.push({
        source: "michelin" as const,
        value:
          typeof michelinRating === "object"
            ? michelinRating.rating
            : michelinRating,
        reviewUrl:
          typeof michelinRating === "object"
            ? michelinRating.reviewUrl
            : undefined,
      });
    }

    if (restaurant.ratings?.dn) {
      const dnRating = restaurant.ratings.dn;
      ratings.push({
        source: "dn" as const,
        value: typeof dnRating === "object" ? dnRating.rating : dnRating,
        reviewUrl:
          typeof dnRating === "object" ? dnRating.reviewUrl : undefined,
      });
    }

    if (restaurant.ratings?.svd) {
      const svdRating = restaurant.ratings.svd;
      ratings.push({
        source: "svd" as const,
        value: typeof svdRating === "object" ? svdRating.rating : svdRating,
        reviewUrl:
          typeof svdRating === "object" ? svdRating.reviewUrl : undefined,
      });
    }

    if (restaurant.ratings?.whiteguide) {
      const whiteguideRating = restaurant.ratings.whiteguide;
      ratings.push({
        source: "whiteguide" as const,
        value:
          typeof whiteguideRating === "object"
            ? whiteguideRating.rating
            : whiteguideRating,
        reviewUrl:
          typeof whiteguideRating === "object"
            ? whiteguideRating.reviewUrl
            : undefined,
      });
    }

    return ratings;
  };

  const ratingsArray = getRatingsArray();

  return (
    <div>
      <a href={restaurant.website}>
        <div className="relative">
          <Image
            width={190}
            height={400}
            className={`w-full object-cover rounded-md mb-2 ${
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
      </a>
      <div>
        <a href={restaurant.website}>
          <Text variant="h4" classNames="relative top-[2px]">
            {restaurant.name}
          </Text>
        </a>

        {ratingsArray.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {ratingsArray.map((rating) => (
              <Rating
                key={rating.source}
                source={rating.source}
                value={rating.value}
                reviewUrl={rating.reviewUrl}
              />
            ))}
          </div>
        )}
      </div>

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
