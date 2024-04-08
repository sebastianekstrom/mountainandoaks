import { render, screen } from "@testing-library/react";
import React from "react";

import type { Recipe } from "types/recipe";

import { PostList } from "./PostList";

const mockRecipes: Recipe[] = [
  {
    title: "Test Recipe 1",
    category: { value: "bread", label: "Bread", path: "/bread" },
    url: "/bread",
    thumbnails: [] as any,
    description: "A description",
  },
  {
    title: "Test Recipe 2",
    category: { value: "bread", label: "Bread", path: "/bread" },
    url: "/bread",
    thumbnails: [] as any,
    description: "A description",
  },
  {
    title: "Test Recipe 3",
    category: { value: "bread", label: "Bread", path: "/bread" },
    url: "/bread",
    thumbnails: [] as any,
    description: "A description",
  },
  {
    title: "Test Recipe 4",
    category: { value: "bread", label: "Bread", path: "/bread" },
    url: "/bread",
    thumbnails: [] as any,
    description: "A description",
  },
  {
    title: "Test Recipe 5",
    category: { value: "bread", label: "Bread", path: "/bread" },
    url: "/bread",
    thumbnails: [] as any,
    description: "A description",
  },
  {
    title: "Test Recipe 6",
    category: { value: "bread", label: "Bread", path: "/bread" },
    url: "/bread",
    thumbnails: [] as any,
    description: "A description",
  },
  {
    title: "Test Recipe 7",
    category: { value: "pizza", label: "Bread", path: "/pizza/ny" },
    url: "/pizza/ny",
    thumbnails: [] as any,
    description: "A description",
  },
  {
    title: "Test Recipe 8",
    category: { value: "pizza", label: "Bread", path: "/pizza/detroit" },
    url: "/pizza/detroit",
    thumbnails: [] as any,
    description: "A description",
  },
];

const mockCategories = [
  {
    title: "Mmmm... bread",
    filter: (recipe: Recipe) => recipe.category.value === "bread",
  },
];

describe("PostList", () => {
  it("renders the latest title", () => {
    render(
      <PostList
        items={mockRecipes}
        latestTitle="Latest bread recipes"
        moreTitle="Mmmmm... bread"
        categories={mockCategories}
      />,
    );
    expect(screen.getByText("Latest bread recipes")).toBeDefined();
  });

  it("renders articles for each recipe", () => {
    render(
      <PostList
        items={mockRecipes}
        latestTitle="Latest bread recipes"
        moreTitle="Mmmmm... bread"
        categories={mockCategories}
      />,
    );
    expect(screen.getByText("Test Recipe 1")).toBeDefined();
    expect(screen.getByText("Test Recipe 2")).toBeDefined();
  });

  it("renders category title when category recipes are present", () => {
    render(
      <PostList
        items={mockRecipes}
        latestTitle="Latest bread recipes"
        moreTitle="Mmmmm... bread"
        categories={mockCategories}
      />,
    );
    expect(screen.getByText("Mmmm... bread")).toBeDefined();
  });
});
