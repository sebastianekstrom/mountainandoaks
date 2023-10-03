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
  });

  it("renders recipe titles", () => {
    render(<Pizza />);
    expect(screen.getByText("New York style pizza dough")).toBeVisible();
    expect(screen.getByText("Detroit style pizza")).toBeVisible();
  });
});
