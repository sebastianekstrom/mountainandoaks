import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Guides from "pages/guides/index";

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

describe("Guides", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/guides",
      route: "/guides",
    });

    render(<Guides />);
  });

  test("renders guide titles", () => {
    expect(screen.getByText("Gear for baking")).toBeDefined();
  });
});
