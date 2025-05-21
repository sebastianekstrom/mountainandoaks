import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import London from "pages/restaurants/london";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

jest.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: jest.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

jest.mock("constants/restaurants/london", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

jest.mock(
  "public/images/restaurants/london/metaImage.jpg",
  () => "mocked-image-path",
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
