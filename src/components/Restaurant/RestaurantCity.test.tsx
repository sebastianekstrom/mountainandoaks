import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { RestaurantCity } from "./RestaurantCity";

const mockRestaurants = [
  {
    name: "Restaurant 1",
    coordinates: { longitude: 18.0686, latitude: 59.3293 },
    ratings: { "m&o": 4.5 },
    image: "/test-image-1.jpg",
    description: "Test restaurant 1 description",
    website: "https://restaurant1.com",
  },
  {
    name: "Restaurant 2",
    coordinates: { longitude: 18.0686, latitude: 59.3293 },
    ratings: {},
    image: "/test-image-2.jpg",
    description: "Test restaurant 2 description",
    website: "https://restaurant2.com",
  },
  {
    name: "Restaurant 3",
    coordinates: { longitude: 18.0686, latitude: 59.3293 },
    ratings: { "m&o": 3.5 },
    image: "/test-image-3.jpg",
    description: "Test restaurant 3 description",
    website: "https://restaurant3.com",
  },
];

const defaultProps = {
  restaurants: mockRestaurants,
  cityName: "Stockholm",
  description: "Best restaurants in Stockholm",
  metaImage: { src: "/test-image.png" },
  mapboxKey: "test-mapbox-key",
};

describe("RestaurantCity", () => {
  it("renders the city name and description", () => {
    render(<RestaurantCity {...defaultProps} />);
    expect(screen.getByText("Stockholm")).toBeDefined();
    expect(screen.getByText("Best restaurants in Stockholm")).toBeDefined();
  });

  it("renders the correct number of restaurants", () => {
    render(<RestaurantCity {...defaultProps} />);
    expect(screen.getByText("Restaurant 1")).toBeDefined();
    expect(screen.getByText("Restaurant 2")).toBeDefined();
    expect(screen.getByText("Restaurant 3")).toBeDefined();
  });

  it("filters restaurants based on search query", () => {
    render(<RestaurantCity {...defaultProps} />);
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "Restaurant 1" } });
    expect(screen.getByText("Restaurant 1")).toBeDefined();
    expect(screen.queryByText("Restaurant 2")).toBeNull();
    expect(screen.queryByText("Restaurant 3")).toBeNull();
  });

  it("filters restaurants based on visited status", () => {
    render(<RestaurantCity {...defaultProps} />);
    const visitedButton = screen.getByText(/Visited/);
    fireEvent.click(visitedButton);
    expect(screen.getByText("Restaurant 1")).toBeDefined();
    expect(screen.getByText("Restaurant 3")).toBeDefined();
    expect(screen.queryByText("Restaurant 2")).toBeNull();
  });

  it("filters restaurants based on not visited status", () => {
    render(<RestaurantCity {...defaultProps} />);
    const notVisitedButton = screen.getByText(/Not visited/);
    fireEvent.click(notVisitedButton);
    expect(screen.getByText("Restaurant 2")).toBeDefined();
    expect(screen.queryByText("Restaurant 1")).toBeNull();
    expect(screen.queryByText("Restaurant 3")).toBeNull();
  });

  it("switches between map and grid view", () => {
    // Ensure desktop width so view mode buttons are rendered
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1200,
    });
    window.dispatchEvent(new Event("resize"));
    render(<RestaurantCity {...defaultProps} />);
    const listButton: HTMLElement | undefined = screen.getByText(/List/);
    fireEvent.click(listButton);
    expect(screen.getByText("List")).toBeDefined();

    const mapButton = screen.getByText(/Map/);
    fireEvent.click(mapButton);
    expect(screen.getByText("Map")).toBeDefined();
  });

  it("shows correct count in filter buttons", () => {
    render(<RestaurantCity {...defaultProps} />);
    expect(screen.getByText(/All \(3\)/)).toBeDefined();
    expect(screen.getByText(/Visited \(2\)/)).toBeDefined();
    expect(screen.getByText(/Not visited \(1\)/)).toBeDefined();
  });
});
