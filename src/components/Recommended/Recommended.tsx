import { useRouter } from "next/router";

import { RECIPES } from "constants/recipes";

import { Article } from "components/Article/Article";
import { Text } from "components/Text/Text";

interface Props {
  category: string;
  title: string;
}

const NUMBER_OF_RECOMMENDATIONS = 12;

export const Recommended = ({ title, category }: Props) => {
  const router = useRouter();
  const currentRoute = router.route;

  if (!category) {
    return null;
  }

  const categoryRecipes = RECIPES.filter((recipe) => {
    return recipe.category.value === category && recipe.url !== currentRoute;
  });

  if (categoryRecipes.length === 0) {
    return null;
  }

  // Determine how many recipes to show (never more than available)
  const recipesToShow = Math.min(
    NUMBER_OF_RECOMMENDATIONS,
    categoryRecipes.length,
  );
  let recommendedRecipes = categoryRecipes;

  // For better variety when we have more recipes than we want to show, use deterministic selection
  // This ensures we don't always show the same "latest" recipes while avoiding hydration issues
  if (categoryRecipes.length > recipesToShow) {
    // Create a simple hash from the current route to ensure deterministic but varied selection
    const routeHash = currentRoute.split("").reduce((hash, char) => {
      return ((hash << 5) - hash + char.charCodeAt(0)) & 0xffffffff;
    }, 0);

    // Create a simple shuffle based on the route hash, then take the first recipesToShow items
    // This ensures we always get the maximum number of unique recipes
    const shuffledRecipes = [...categoryRecipes].sort((a, b) => {
      // Create a hash for each recipe based on the route and recipe title
      const hashA = (routeHash + a.title.charCodeAt(0)) & 0xffffffff;
      const hashB = (routeHash + b.title.charCodeAt(0)) & 0xffffffff;
      return hashA - hashB;
    });

    recommendedRecipes = shuffledRecipes.slice(0, recipesToShow);
  }

  return (
    <section className="mt-12 lg:mt-24">
      <Text variant="h2" classNames="mb-4">
        {title}
      </Text>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
        {recommendedRecipes.map((recipe) => {
          return (
            <Article key={recipe.title} recipe={recipe} type="rectangle" />
          );
        })}
      </div>
    </section>
  );
};
