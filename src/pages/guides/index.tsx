import React from "react";

import { Page } from "components/Page/Page";
import { PostList } from "components/PostList/PostList";

import baking from "public/images/techniques/gear/thumbnails/hero.jpg";
import { RECIPES } from "constants/recipes";

export default function Guides() {
  const guides = RECIPES.filter((recipe) => {
    return recipe.category.value === "guide";
  });
  return (
    <Page
      metaTitle="Techniques"
      description="Techniques, methods and gear that will level up your baking game"
      image={baking}
    >
      <PostList
        latestTitle="Latest guides"
        moreTitle="Level up your game"
        items={guides}
      />
    </Page>
  );
}
