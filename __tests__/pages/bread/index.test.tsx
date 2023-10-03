import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Bread from "pages/bread/index";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Bread", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/bread",
      route: "/bread",
    });
  });

  it("renders recipe titles", () => {
    render(<Bread />);
    expect(screen.getByText("Baguette")).toBeDefined();
  });
});
