import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Toronto from "pages/restaurants/toronto";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

jest.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: jest.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

jest.mock("constants/restaurants/toronto", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

jest.mock(
  "public/images/restaurants/toronto/metaImage.jpg",
  () => "mocked-image-path",
);

describe("Toronto page", () => {
  it("renders the RestaurantCity component with correct props", () => {
    render(<Toronto mapboxKey="test-key" />);

    expect(screen.getByTestId("restaurant-city-component")).toBeInTheDocument();

    expect(RestaurantCity).toHaveBeenCalledWith(
      expect.objectContaining({
        restaurants: expect.any(Array),
        cityName: "Toronto",
        description: expect.stringContaining(
          "restaurants we've visited or wish to visit in Toronto",
        ),
        mapboxKey: "test-key",
      }),
      expect.anything(),
    );
  });
});
