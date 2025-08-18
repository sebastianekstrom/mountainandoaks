import { render, screen } from "@testing-library/react";
import React from "react";
import type { Restaurant } from "../../../constants/restaurants/types";
import { RestaurantCard } from "./RestaurantCard";

const mockRestaurant: Restaurant = {
  name: "Test Restaurant",
  coordinates: { longitude: 18.0686, latitude: 59.3293 },
  image: "/test-image.jpg",
  description: "A test restaurant",
  website: "https://example.com",
};

describe("RestaurantCard component", () => {
  it("renders basic restaurant information", () => {
    render(
      <RestaurantCard
        restaurant={mockRestaurant}
        isCompactMode={false}
        index={0}
      />,
    );

    expect(screen.getByText("Test Restaurant")).toBeInTheDocument();
    expect(screen.getByText("A test restaurant")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/test-image.jpg");
  });

  it("renders no ratings when restaurant has no ratings", () => {
    render(
      <RestaurantCard
        restaurant={mockRestaurant}
        isCompactMode={false}
        index={0}
      />,
    );

    expect(screen.queryByText(/\/10/)).not.toBeInTheDocument(); // M&O ratings
    expect(screen.queryByText(/\/5/)).not.toBeInTheDocument(); // DN ratings
    expect(screen.queryByText(/\/6/)).not.toBeInTheDocument(); // SvD and WG ratings
  });

  it("renders M&O rating in 'Our rating' section when available", () => {
    const restaurantWithMO: Restaurant = {
      ...mockRestaurant,
      ratings: { "m&o": 8 },
    };

    render(
      <RestaurantCard
        restaurant={restaurantWithMO}
        isCompactMode={false}
        index={0}
      />,
    );

    expect(screen.getByText("Our rating")).toBeInTheDocument();
    expect(screen.queryByText("Other ratings")).not.toBeInTheDocument();
    expect(screen.getByTitle("Mountain & Oaks: 8/10")).toBeInTheDocument();
    expect(screen.getByText("8/10")).toBeInTheDocument();
  });

  it("renders all rating types with correct sections", () => {
    const restaurantWithAllRatings: Restaurant = {
      ...mockRestaurant,
      ratings: {
        michelin: 2,
        "m&o": 8,
        dn: 4,
        svd: 5,
        whiteguide: 3,
      },
    };

    render(
      <RestaurantCard
        restaurant={restaurantWithAllRatings}
        isCompactMode={false}
        index={0}
      />,
    );

    expect(screen.getByText("Our rating")).toBeInTheDocument();
    expect(screen.getByText("Other ratings")).toBeInTheDocument();

    expect(screen.getByTitle("Mountain & Oaks: 8/10")).toBeInTheDocument();
    expect(screen.getByTitle("2 Michelin stars")).toBeInTheDocument();
    expect(screen.getByTitle("Dagens Nyheter: 4/5")).toBeInTheDocument();
    expect(screen.getByTitle("Svenska Dagbladet: 5/6")).toBeInTheDocument();
    expect(screen.getByTitle("White Guide: 3/6")).toBeInTheDocument();

    expect(screen.getByText("8/10")).toBeInTheDocument();
    expect(screen.getByText("4/5")).toBeInTheDocument(); // DN uses icon now, just check rating
    expect(screen.getByText("5/6")).toBeInTheDocument(); // SvD uses icon now, just check rating
    expect(screen.getByText("3/6")).toBeInTheDocument(); // WG uses icon now, just check rating

    const starImages = screen.getAllByAltText("");
    const michelinStars = starImages.filter(
      (img) => img.getAttribute("src") === "/images/misc/michelin-star.svg",
    );
    expect(michelinStars).toHaveLength(2);
  });

  it("renders only 'Other ratings' section when no M&O rating", () => {
    const restaurantWithoutMO: Restaurant = {
      ...mockRestaurant,
      ratings: {
        michelin: 1,
        dn: 4,
      },
    };

    render(
      <RestaurantCard
        restaurant={restaurantWithoutMO}
        isCompactMode={false}
        index={0}
      />,
    );

    expect(screen.queryByText("Our rating")).not.toBeInTheDocument();
    expect(screen.getByText("Other ratings")).toBeInTheDocument();
    expect(screen.getByTitle("1 Michelin star")).toBeInTheDocument();
    expect(screen.getByTitle("Dagens Nyheter: 4/5")).toBeInTheDocument();
  });

  it("handles rating objects with review links", () => {
    const restaurantWithLinks: Restaurant = {
      ...mockRestaurant,
      ratings: {
        michelin: { rating: 2, reviewUrl: "https://michelin.example.com" },
        dn: { rating: 4, reviewUrl: "https://dn.se/review" },
        svd: { rating: 5, reviewUrl: "https://svd.se/review" },
        whiteguide: { rating: 3, reviewUrl: "https://whiteguide.com/review" },
      },
    };

    render(
      <RestaurantCard
        restaurant={restaurantWithLinks}
        isCompactMode={false}
        index={0}
      />,
    );

    const michelinLink = screen.getByTitle("2 Michelin stars");
    expect(michelinLink.tagName).toBe("A");
    expect(michelinLink).toHaveAttribute(
      "href",
      "https://michelin.example.com",
    );
    expect(michelinLink).toHaveAttribute("target", "_blank");

    const dnLink = screen.getByTitle("Dagens Nyheter: 4/5");
    expect(dnLink.tagName).toBe("A");
    expect(dnLink).toHaveAttribute("href", "https://dn.se/review");

    const svdLink = screen.getByTitle("Svenska Dagbladet: 5/6");
    expect(svdLink.tagName).toBe("A");
    expect(svdLink).toHaveAttribute("href", "https://svd.se/review");

    const whiteguideLink = screen.getByTitle("White Guide: 3/6");
    expect(whiteguideLink.tagName).toBe("A");
    expect(whiteguideLink).toHaveAttribute(
      "href",
      "https://whiteguide.com/review",
    );

    expect(screen.getByText("4/5")).toBeInTheDocument();
    expect(screen.getByText("5/6")).toBeInTheDocument();
    expect(screen.getByText("3/6")).toBeInTheDocument();
  });

  it("handles mixed simple ratings and rating objects", () => {
    const restaurantMixed: Restaurant = {
      ...mockRestaurant,
      ratings: {
        "m&o": 8, // Simple number
        michelin: { rating: 1, reviewUrl: "https://michelin.example.com" }, // Object with link
        dn: 4, // Simple number
        svd: { rating: 5, reviewUrl: "https://svd.se/review" }, // Object with link
      },
    };

    render(
      <RestaurantCard
        restaurant={restaurantMixed}
        isCompactMode={false}
        index={0}
      />,
    );

    expect(screen.getByTitle("Mountain & Oaks: 8/10").tagName).toBe("DIV");
    expect(screen.getByTitle("Dagens Nyheter: 4/5").tagName).toBe("DIV");

    expect(screen.getByTitle("1 Michelin star").tagName).toBe("A");
    expect(screen.getByTitle("1 Michelin star")).toHaveAttribute(
      "href",
      "https://michelin.example.com",
    );

    expect(screen.getByTitle("Svenska Dagbladet: 5/6").tagName).toBe("A");
    expect(screen.getByTitle("Svenska Dagbladet: 5/6")).toHaveAttribute(
      "href",
      "https://svd.se/review",
    );
  });

  it("renders different image heights based on compact mode", () => {
    const { rerender } = render(
      <RestaurantCard
        restaurant={mockRestaurant}
        isCompactMode={false}
        index={0}
      />,
    );

    let image = screen.getByRole("img");
    expect(image).toHaveClass("h-[190px]");

    rerender(
      <RestaurantCard
        restaurant={mockRestaurant}
        isCompactMode={true}
        index={0}
      />,
    );

    image = screen.getByRole("img");
    expect(image).toHaveClass("h-[120px]");
  });

  it("renders chefs information when available", () => {
    const restaurantWithChefs: Restaurant = {
      ...mockRestaurant,
      chefs: [
        { name: "Chef One", description: "Description One" },
        { name: "Chef Two", description: null },
      ],
    };

    render(
      <RestaurantCard
        restaurant={restaurantWithChefs}
        isCompactMode={false}
        index={0}
      />,
    );

    expect(screen.getByText("Chefs")).toBeInTheDocument();
    expect(screen.getByText("Chef One")).toBeInTheDocument();
    expect(screen.getByText("Description One")).toBeInTheDocument();
    expect(screen.getByText("Chef Two")).toBeInTheDocument();
  });

  it("does not render chefs section when no chefs", () => {
    render(
      <RestaurantCard
        restaurant={mockRestaurant}
        isCompactMode={false}
        index={0}
      />,
    );

    expect(screen.queryByText("Chefs")).not.toBeInTheDocument();
  });

  it("renders correct link to restaurant website", () => {
    render(
      <RestaurantCard
        restaurant={mockRestaurant}
        isCompactMode={false}
        index={0}
      />,
    );

    const restaurantNameLink = screen.getByRole("link", {
      name: "Test Restaurant",
    });
    expect(restaurantNameLink).toHaveAttribute("href", "https://example.com");

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(1);
    expect(links[0]).toHaveAttribute("href", "https://example.com");
  });
});
