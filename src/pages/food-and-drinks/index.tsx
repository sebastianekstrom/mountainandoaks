import React from "react";

import { Page } from "components/Page/Page";
import { PostList } from "components/PostList/PostList";
import image from "public/images/recipes/puttanesca/thumbnails/hero.png";
import { RECIPES } from "constants/recipes";

export default function FoodAndDrinks() {
  const recipes = RECIPES.filter((recipe) => {
    return recipe.category.value === "food-and-drinks";
  });
  return (
    <Page
      metaTitle="Food & Drinks"
      description="Various recipes created by me"
      image={image}
    >
      <PostList
        latestTitle="Latest food and drinks"
        moreTitle="More delicious food"
        items={recipes}
      />
    </Page>
  );
}
