import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RestaurantsHome from "pages/restaurants/index";

jest.mock("constants/restaurants/stockholm", () => ({
  RESTAURANTS: Array(10).fill({ name: "Test Stockholm Restaurant" }),
}));

jest.mock("constants/restaurants/london", () => ({
  RESTAURANTS: Array(5).fill({ name: "Test London Restaurant" }),
}));

jest.mock(
  "public/images/restaurants/stockholm/metaImage.jpg",
  () => "mocked-stockholm-image-path",
);

describe("Restaurants index page", () => {
  it("renders the page title and description", () => {
    render(<RestaurantsHome />);

    expect(
      screen.getAllByText(/A carefully curated list of/i)[0],
    ).toBeInTheDocument();
  });

  it("renders all cities with correct restaurant counts", () => {
    render(<RestaurantsHome />);

    expect(screen.getByText("Stockholm")).toBeInTheDocument();
    expect(screen.getByText("London")).toBeInTheDocument();
  });

  it("has correct links to city pages", () => {
    render(<RestaurantsHome />);

    const stockholmLink = screen.getByRole("link", { name: /Stockholm/i });
    expect(stockholmLink).toHaveAttribute("href", "/restaurants/stockholm");

    const londonLink = screen.getByRole("link", { name: /London/i });
    expect(londonLink).toHaveAttribute("href", "/restaurants/london");
  });
});
