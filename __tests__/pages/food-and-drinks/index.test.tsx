import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import FoodAndDrinks from "pages/food-and-drinks/index";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("FoodAndDrinks", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/food-and-drinks",
      route: "/food-and-drinks",
    });
  });

  it("renders recipe titles", () => {
    render(<FoodAndDrinks />);
    expect(screen.getByText("Alabama Slammer")).toBeDefined();
  });
});
