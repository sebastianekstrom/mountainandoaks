import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Stockholm from "pages/restaurants/stockholm";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

jest.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: jest.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

jest.mock("constants/restaurants/stockholm", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

jest.mock(
  "public/images/restaurants/stockholm/metaImage.jpg",
  () => "mocked-image-path",
);

describe("Stockholm page", () => {
  it("renders the RestaurantCity component with correct props", () => {
    render(<Stockholm mapboxKey="test-key" />);

    expect(screen.getByTestId("restaurant-city-component")).toBeInTheDocument();

    expect(RestaurantCity).toHaveBeenCalledWith(
      expect.objectContaining({
        restaurants: expect.any(Array),
        cityName: "Stockholm",
        description: expect.stringContaining(
          "restaurants we've visited or wish to visit in Stockholm",
        ),
        mapboxKey: "test-key",
      }),
      expect.anything(),
    );
  });
});
