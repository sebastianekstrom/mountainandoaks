import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import Paris from "pages/restaurants/paris";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

vi.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: vi.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

vi.mock("constants/restaurants/paris", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

vi.mock(
  "public/images/restaurants/paris/metaImage.jpg",
  () => ({ default: "mocked-image-path" }),
);

describe("Paris page", () => {
  it("renders the RestaurantCity component with correct props", () => {
    render(<Paris mapboxKey="test-key" />);

    expect(screen.getByTestId("restaurant-city-component")).toBeInTheDocument();

    expect(RestaurantCity).toHaveBeenCalledWith(
      expect.objectContaining({
        restaurants: expect.any(Array),
        cityName: "Paris",
        description: expect.stringContaining(
          "restaurants we've visited or wish to visit in Paris",
        ),
        mapboxKey: "test-key",
      }),
      expect.anything(),
    );
  });
});
