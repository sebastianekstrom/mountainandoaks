import React from "react";

import baguette from "public/images/bread/baguette/baguette.png";

import { RECIPES } from "constants/recipes";

import { Page } from "components/Page/Page";
import { PostList } from "components/PostList/PostList";

export default function BreadHome() {
	const breadRecipes = RECIPES.filter(
		(recipe) => recipe.category.value === "bread",
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
