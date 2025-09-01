import { render, screen } from "@testing-library/react";
import React from "react";
import { useRouter } from "next/router";

import { Recommended } from "./Recommended";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../constants/recipes", () => {
  const createMockRecipe = (title: string, category: string) => ({
    title,
    url: `/${category}/${title.toLowerCase().replace(/\s+/g, "-")}`,
    category: {
      value: category,
      label:
        category === "food-and-drinks"
          ? "Food & Drinks"
          : category.charAt(0).toUpperCase() + category.slice(1),
      path: `/${category}`,
    },
    thumbnails: {
      hero: "mock.png",
      wide: "mock.png",
      square: "mock.png",
      tall: "mock.png",
      meta: "mock.png",
    },
    description: `Mock description for ${title}`,
  });

  return {
    RECIPES: [
      createMockRecipe("Baguette", "bread"),
      createMockRecipe("Sourdough", "bread"),
      createMockRecipe("Focaccia", "bread"),
      ...Array.from({ length: 15 }, (_, i) =>
        createMockRecipe(`Recipe ${i + 1}`, "food-and-drinks"),
      ),
      createMockRecipe("Baking Guide", "guide"),
      createMockRecipe("Pizza Guide", "guide"),
    ],
  };
});

const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

const createMockRouter = (route = "/test-route") => ({
  route,
  pathname: route,
  query: {},
  asPath: route,
  basePath: "",
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: "en",
  domainLocales: [],
  isPreview: false,
});

describe("Recommended Component", () => {
  beforeEach(() => {
    mockUseRouter.mockReturnValue(createMockRouter());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with bread category (shows all available bread recipes)", () => {
    render(<Recommended title="More delicious bread" category="bread" />);

    const articles = screen.getAllByRole("article");

    expect(articles).toHaveLength(3);
    expect(screen.getByText("More delicious bread")).toBeInTheDocument();
  });

  it("excludes current recipe from recommendations", () => {
    mockUseRouter.mockReturnValue(createMockRouter("/bread/baguette"));

    render(<Recommended title="More delicious bread" category="bread" />);

    const articles = screen.getAllByRole("article");

    expect(articles).toHaveLength(2);
    expect(screen.queryByText("Baguette")).not.toBeInTheDocument();
    expect(screen.getByText("Sourdough")).toBeInTheDocument();
    expect(screen.getByText("Focaccia")).toBeInTheDocument();
  });

  it("uses deterministic selection when more recipes than limit", () => {
    render(<Recommended title="More recipes" category="food-and-drinks" />);

    const articles = screen.getAllByRole("article");

    expect(articles).toHaveLength(12);
    expect(screen.getByText("More recipes")).toBeInTheDocument();
  });

  it("shows fewer recipes when category has limited recipes", () => {
    render(<Recommended title="More guides" category="guide" />);

    const articles = screen.getAllByRole("article");

    expect(articles).toHaveLength(2);
    expect(screen.getByText("Baking Guide")).toBeInTheDocument();
    expect(screen.getByText("Pizza Guide")).toBeInTheDocument();
  });

  it("returns null when no category is provided", () => {
    const { container } = render(
      <Recommended title="Check these out!" category="" />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("returns null when category has no recipes after exclusion", () => {
    mockUseRouter.mockReturnValue(createMockRouter("/nonexistent/only-recipe"));

    const { container } = render(
      <Recommended title="No recipes" category="nonexistent" />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders deterministic results for same route", () => {
    const route = "/food-and-drinks/test-recipe";
    mockUseRouter.mockReturnValue(createMockRouter(route));

    const { unmount } = render(
      <Recommended title="More recipes" category="food-and-drinks" />,
    );
    const firstRenderArticles = screen.getAllByRole("article");
    const firstRenderTitles = firstRenderArticles.map(
      (article) => article.querySelector("h4")?.textContent,
    );

    unmount();

    render(<Recommended title="More recipes" category="food-and-drinks" />);
    const secondRenderArticles = screen.getAllByRole("article");
    const secondRenderTitles = secondRenderArticles.map(
      (article) => article.querySelector("h4")?.textContent,
    );

    expect(firstRenderTitles).toEqual(secondRenderTitles);
    expect(firstRenderTitles).toHaveLength(12);
    expect(secondRenderTitles).toHaveLength(12);
  });
});
