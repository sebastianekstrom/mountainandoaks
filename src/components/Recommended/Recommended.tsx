import Text from "components/Text";
import Article from "components/Article";
import { useRouter } from "next/router";

import { RECIPES } from "constants/recipes";

interface Props {
  category: string;
  title: string;
}

export const Recommended = ({ title, category }: Props) => {
  const router = useRouter();
  const currentRoute = router.route;

  if (!category) {
    return null;
  }

  const last3 = RECIPES.filter((recipe) => {
    return recipe.category.value === category && recipe.url !== currentRoute;
  }).slice(0, 3);

  if (last3.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 lg:mt-24">
      <Text variant="h2" classNames="mb-4">
        {title}
      </Text>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
        {last3.map((recipe) => {
          return (
            <Article key={recipe.title} recipe={recipe} type="rectangle" />
          );
        })}
      </div>
    </section>
  );
};
