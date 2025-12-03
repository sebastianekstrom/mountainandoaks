import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import NewYork from "pages/restaurants/new-york";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

vi.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: vi.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

vi.mock("constants/restaurants/new-york", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

vi.mock(
  "public/images/restaurants/new-york/metaImage.jpg",
  () => ({ default: "mocked-image-path" }),
);

describe("New York page", () => {
  it("renders the RestaurantCity component with correct props", () => {
    render(<NewYork mapboxKey="test-key" />);

    expect(screen.getByTestId("restaurant-city-component")).toBeInTheDocument();

    expect(RestaurantCity).toHaveBeenCalledWith(
      expect.objectContaining({
        restaurants: expect.any(Array),
        cityName: "New York",
        description: expect.stringContaining(
          "restaurants we've visited or wish to visit in New York",
        ),
        mapboxKey: "test-key",
      }),
      expect.anything(),
    );
  });
});
