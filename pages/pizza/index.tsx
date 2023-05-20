import React from "react";

import Page from "components/Page";
import PostList from "components/PostList";
import pizza from "public/images/pizza/pizza.jpg";
import { RECIPES } from "constants/recipes";

export default function Pizza() {
  const pizzas = RECIPES.filter((recipe) => {
    return recipe.category.value === "pizza";
  });

  return (
    <Page
      metaTitle="Pizza"
      description="Optimized and battle tested pizza recipes"
      image={pizza}
    >
      <PostList
        latestTitle="Latest pizza recipes"
        moreTitle="More delicious pizza"
        items={pizzas}
      />
    </Page>
  );
}
