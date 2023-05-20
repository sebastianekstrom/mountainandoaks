import React from "react";
import { render, screen } from "@testing-library/react";
import SimpleLoaf from "pages/bread/the-simple-loaf";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SimpleLoaf page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });

    render(<SimpleLoaf />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/The simple loaf/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /A basic, simple and delicious loaf/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Bread flour/i);
    const waterLabel = screen.queryAllByText(/Water/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(/Mix the dry ingredients/i);
    expect(step).toBeDefined();
  });
});
