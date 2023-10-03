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
  });

  it("renders recipe titles", () => {
    render(<Home />);
    expect(screen.getByText("Pasta Bolognese")).toBeDefined();
    expect(screen.getByText("Birria tacos")).toBeDefined();
  });

  it("renders category sections", () => {
    render(<Home />);
    expect(screen.getByText("More delicious pizza")).toBeDefined();
    expect(screen.getByText("Mmmm... bread")).toBeDefined();
  });
});
