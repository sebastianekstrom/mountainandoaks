import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import FoodAndDrinks from "pages/food-and-drinks/index";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    /* eslint-disable @next/next/no-img-element */
    return <img {...props} alt="" />;
    /* eslint-enable @next/next/no-img-element */
  },
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("FoodAndDrinks", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/food-and-drinks",
      route: "/food-and-drinks",
    });

    render(<FoodAndDrinks />);
  });

  test("renders recipe titles", () => {
    expect(screen.getByText("Alabama Slammer")).toBeDefined();
  });
});
