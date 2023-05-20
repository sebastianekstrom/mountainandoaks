import React from "react";
import { render, screen } from "@testing-library/react";
import DetroitStyle from "pages/pizza/detroit-style";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("DetroitStyle page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });

    render(<DetroitStyle />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Detroit style pizza/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /The Detroit style pizza is a deep-dish pizza/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Bread flour/i);
    const waterLabel = screen.queryAllByText(/Canned tomatoes/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Adjust oven rack to lowest position and preheat/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    const alert = screen.queryAllByText(/Remember to over season your sauce/i);
    expect(alert).toBeDefined();
  });
});
