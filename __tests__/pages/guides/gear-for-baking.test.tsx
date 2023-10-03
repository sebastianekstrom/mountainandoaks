import React from "react";
import { render, screen } from "@testing-library/react";
import GearForBaking from "pages/guides/gear-for-baking";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("GearForBaking page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });
  });

  it("renders title correctly", () => {
    render(<GearForBaking />);
    const title = screen.queryAllByText(/Gear for baking/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<GearForBaking />);
    const ingress = screen.queryAllByText(/any gear to bake bread or pizzas/i);
    expect(ingress).toBeDefined();
  });
});
