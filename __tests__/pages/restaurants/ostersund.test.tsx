import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Ostersund from "pages/restaurants/ostersund";
import { RestaurantCity } from "components/Restaurant/RestaurantCity";

jest.mock("components/Restaurant/RestaurantCity", () => ({
  RestaurantCity: jest.fn(() => (
    <div data-testid="restaurant-city-component" />
  )),
}));

jest.mock("constants/restaurants/ostersund", () => ({
  RESTAURANTS: [{ name: "Test Restaurant" }],
}));

jest.mock(
  "public/images/restaurants/ostersund/metaImage.jpg",
  () => "mocked-image-path",
);

describe("Östersund page", () => {
  it("renders the RestaurantCity component with correct props", () => {
    render(<Ostersund mapboxKey="test-key" />);

    expect(screen.getByTestId("restaurant-city-component")).toBeInTheDocument();

    expect(RestaurantCity).toHaveBeenCalledWith(
      expect.objectContaining({
        restaurants: expect.any(Array),
        cityName: "Östersund",
        description: expect.stringContaining(
          "restaurants we've visited or wish to visit in Östersund",
        ),
        mapboxKey: "test-key",
      }),
      expect.anything(),
    );
  });
});
