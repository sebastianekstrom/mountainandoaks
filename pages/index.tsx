import Page from "components/Page";

import PostList from "components/PostList";
import { RECIPES } from "constants/recipes";
import pizza from "public/images/pizza/detroit/thumbnails/hero.jpg";
import { Recipe } from "types/recipe";

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
    title: "Hey good looking, what'ya got cooking?",
    filter: (recipe: Recipe) => recipe.category.value === "food-and-drinks",
  },
  {
    title: "Level up",
    filter: (recipe: Recipe) => recipe.category.value === "guide",
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
