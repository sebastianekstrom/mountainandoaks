import React from "react";
import { render, screen } from "@testing-library/react";
import HamburgerBun from "pages/bread/hamburger-bun";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("HamburgerBun page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });
  });

  it("renders title correctly", () => {
    render(<HamburgerBun />);
    const title = screen.queryAllByText(/Hamburger bun/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<HamburgerBun />);
    const ingress = screen.queryAllByText(
      /These are the perfect buns for a smashed burger/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<HamburgerBun />);
    const flourLabel = screen.queryAllByText(/All purpose flour/i);
    const waterLabel = screen.queryAllByText(/Water/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<HamburgerBun />);
    const step = screen.queryAllByText(/Boil the baked potato until soft/i);
    expect(step).toBeDefined();
  });
});
