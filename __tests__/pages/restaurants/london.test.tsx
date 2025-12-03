import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import London from "pages/restaurants/london";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

vi.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: vi.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

vi.mock("constants/restaurants/london", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

vi.mock(
  "public/images/restaurants/london/metaImage.jpg",
  () => ({ default: "mocked-image-path" }),
);

describe("London page", () => {
  it("renders the RestaurantCity component with correct props", () => {
    render(<London mapboxKey="test-key" />);

    expect(screen.getByTestId("restaurant-city-component")).toBeInTheDocument();

    expect(RestaurantCity).toHaveBeenCalledWith(
      expect.objectContaining({
        restaurants: expect.any(Array),
        cityName: "London",
        description: expect.stringContaining(
          "restaurants we've visited or wish to visit in London",
        ),
        mapboxKey: "test-key",
      }),
      expect.anything(),
    );
  });
});
