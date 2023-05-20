import React from "react";
import { render, screen } from "@testing-library/react";
import BakingPizza from "pages/guides/baking-pizza-in-home-oven";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BakingPizza page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });

    render(<BakingPizza />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Baking pizza in a home oven/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /Pizza loves heat. But a regular home oven/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Insert your pizza steel into the oven/i
    );
    expect(step).toBeDefined();
  });
});
