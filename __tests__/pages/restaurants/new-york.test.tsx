import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewYork from "pages/restaurants/new-york";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

jest.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: jest.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

jest.mock("constants/restaurants/new-york", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

jest.mock(
  "public/images/restaurants/new-york/metaImage.jpg",
  () => "mocked-image-path",
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
