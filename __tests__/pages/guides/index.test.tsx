import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Guides from "pages/guides/index";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Guides", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/guides",
      route: "/guides",
    });
  });

  it("renders guide titles", () => {
    render(<Guides />);
    expect(screen.getByText("Gear for baking")).toBeDefined();
  });
});
