import React from "react";

import { Article } from "components/Article/Article";
import { Text } from "components/Text/Text";

import { Recipe } from "types/recipe";

interface Category {
  title: string;
  // eslint-disable-next-line no-unused-vars
  filter: (recipe: Recipe) => boolean;
  isRestCategory?: boolean;
}

interface Props {
  items: Recipe[];
  latestTitle: string;
  categories?: Category[];
  moreTitle?: string;
}

export const PostList = ({
  items,
  latestTitle,
  categories,
  moreTitle,
}: Props) => {
  const lastRecipe = items[0];
  const last3Recipes = items.slice(1, 4);
  let filteredList = items.slice(4);

  let categoryItems: Recipe[] = [];

  return (
    <div>
      <Text variant="h2" classNames="mb-4 mt-4 lg:mt-0 hidden lg:block">
        {latestTitle}
      </Text>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-28 mt-4 lg:mt-0">
        <Article recipe={lastRecipe} type="featured" />

        <div>
          {last3Recipes.map((recipe, index) => (
            <Article
              key={recipe.title}
              first={index === 0}
              recipe={recipe}
              type="square"
            />
          ))}
        </div>
      </section>

      {/* Used for the home page */}
      {categories &&
        categories?.map(({ title, filter, isRestCategory }, index) => {
          let categoryRecipes: Recipe[];

          if (isRestCategory) {
            categoryRecipes = [...filteredList];
          } else {
            categoryRecipes = filteredList.filter(filter).slice(0, 3);
            categoryItems = [...categoryItems, ...categoryRecipes];
            filteredList = filteredList.filter(
              (recipe) => !categoryRecipes.includes(recipe)
            );
          }

          return (
            categoryRecipes.length > 0 && (
              <section key={index} className="mt-12 lg:mt-24">
                <Text variant="h2" classNames="mb-4">
                  {title}
                </Text>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                  {categoryRecipes.map((recipe) => (
                    <Article
                      key={recipe.title}
                      recipe={recipe}
                      type="rectangle"
                    />
                  ))}
                </div>
              </section>
            )
          );
        })}

      {moreTitle && filteredList.length > 0 && (
        <section className="mt-24">
          <Text variant="h2" classNames="mb-4">
            {moreTitle}
          </Text>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            {filteredList
              .filter((recipe) => !categoryItems.includes(recipe))
              .map((recipe) => (
                <Article key={recipe.title} recipe={recipe} type="rectangle" />
              ))}
          </div>
        </section>
      )}
    </div>
  );
};
