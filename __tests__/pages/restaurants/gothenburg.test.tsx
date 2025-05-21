import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gothenburg from "pages/restaurants/gothenburg";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

jest.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: jest.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

jest.mock("constants/restaurants/gothenburg", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

jest.mock(
  "public/images/restaurants/gothenburg/metaImage.jpg",
  () => "mocked-image-path",
);

describe("Gothenburg page", () => {
  it("renders the RestaurantCity component with correct props", () => {
    render(<Gothenburg mapboxKey="test-key" />);

    expect(screen.getByTestId("restaurant-city-component")).toBeInTheDocument();

    expect(RestaurantCity).toHaveBeenCalledWith(
      expect.objectContaining({
        restaurants: expect.any(Array),
        cityName: "Gothenburg",
        description: expect.stringContaining(
          "restaurants we've visited or wish to visit in Gothenburg",
        ),
        mapboxKey: "test-key",
      }),
      expect.anything(),
    );
  });
});
