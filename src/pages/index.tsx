import pizza from "public/images/pizza/detroit/thumbnails/hero.png";

import { RECIPES } from "constants/recipes";

import { Page } from "components/Page/Page";
import { PostList } from "components/PostList/PostList";

import type { Recipe } from "types/recipe";

const categories = [
  {
    title: "More delicious pizza",
    filter: (recipe: Recipe) => recipe.category.value === "pizza",
  },
  {
    title: "Mmmm... bread",
    filter: (recipe: Recipe) => recipe.category.value === "bread",
  },
  {
    title: "More food",
    filter: (recipe: Recipe) => recipe.category.value === "food-and-drinks",
  },
  {
    title: "Level up",
    filter: (recipe: Recipe) => recipe.category.value === "guide",
  },
  {
    title: "All recipes",
    filter: () => true,
    isRestCategory: true,
  },
];

export default function Home() {
  return (
    <Page
      metaTitle="Sebbe bakes"
      description="Recipes, method and techniques for pizza and bread"
      image={pizza}
    >
      <PostList
        items={RECIPES}
        latestTitle="Latest recipes"
        categories={categories}
      />
    </Page>
  );
}
