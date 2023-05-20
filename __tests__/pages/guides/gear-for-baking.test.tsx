import React from "react";
import { render, screen } from "@testing-library/react";
import GearForBaking from "pages/guides/gear-for-baking";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("GearForBaking page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });

    render(<GearForBaking />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Gear for baking/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(/any gear to bake bread or pizzas/i);
    expect(ingress).toBeDefined();
  });
});
