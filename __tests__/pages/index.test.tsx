import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Home from "pages/index";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Home", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/",
    });

    render(<Home />);
  });

  test("renders recipe titles", () => {
    expect(screen.getByText("Pasta Bolognese")).toBeDefined();
    expect(screen.getByText("Birria tacos")).toBeDefined();
  });

  test("renders category sections", () => {
    expect(screen.getByText("More delicious pizza")).toBeDefined();
    expect(screen.getByText("Mmmm... bread")).toBeDefined();
  });
});
