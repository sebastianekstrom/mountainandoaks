import React from "react";

import Page from "components/Page";
import { RECIPES } from "constants/recipes";
import PostList from "components/PostList";

import baguette from "public/images/bread/baguette/baguette.png";

export default function BreadHome() {
  const breadRecipes = RECIPES.filter(
    (recipe) => recipe.category.value === "bread"
  );

  return (
    <Page
      metaTitle="Bread"
      description="Optimized and battle tested bread recipes"
      image={baguette}
    >
      <PostList
        items={breadRecipes}
        latestTitle="Latest bread recipes"
        moreTitle="Mmmmm... bread"
      />
    </Page>
  );
}
