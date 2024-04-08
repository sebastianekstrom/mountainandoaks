import React from "react";

import pizza from "public/images/pizza/detroit/thumbnails/hero.jpg";

import { RECIPES } from "constants/recipes";

import { Page } from "components/Page/Page";
import { PostList } from "components/PostList/PostList";

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
