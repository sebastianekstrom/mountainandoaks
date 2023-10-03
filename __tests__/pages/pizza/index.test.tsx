import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Pizza from "pages/pizza/index";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Pizza", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/pizza",
      route: "/pizza",
    });

    render(<Pizza />);
  });

  test("renders recipe titles", () => {
    expect(screen.getByText("New York style pizza dough")).toBeDefined();
    expect(screen.getByText("Detroit style pizza")).toBeDefined();
  });
});
