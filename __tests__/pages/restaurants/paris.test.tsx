import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Paris from "pages/restaurants/paris";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

jest.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: jest.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

jest.mock("constants/restaurants/paris", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

jest.mock(
  "public/images/restaurants/paris/metaImage.jpg",
  () => "mocked-image-path",
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
