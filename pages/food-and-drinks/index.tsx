import React from "react";

import Page from "components/Page";
import PostList from "components/PostList";
import kebabSauce from "public/images/recipes/kebab-sauce.jpg";
import { RECIPES } from "constants/recipes";

export default function FoodAndDrinks() {
  const recipes = RECIPES.filter((recipe) => {
    return recipe.category.value === "food-and-drinks";
  });
  return (
    <Page
      metaTitle="Food & Drinks"
      description="Various recipes created by me"
      image={kebabSauce}
    >
      <PostList
        latestTitle="Latest food and drinks"
        moreTitle="More delicious food"
        items={recipes}
      />
    </Page>
  );
}
