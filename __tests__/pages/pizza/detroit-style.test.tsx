import React from "react";
import { render, screen } from "@testing-library/react";
import DetroitStyle from "pages/pizza/detroit-style";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("DetroitStyle page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/pizza/detroit-style",
    });
  });

  it("renders title correctly", () => {
    render(<DetroitStyle />);
    const title = screen.queryAllByText(/Detroit style pizza/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<DetroitStyle />);
    const ingress = screen.queryAllByText(
      /The Detroit style pizza is a deep-dish pizza/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<DetroitStyle />);
    const flourLabel = screen.queryAllByText(/Bread flour/i);
    const waterLabel = screen.queryAllByText(/Canned tomatoes/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<DetroitStyle />);
    const step = screen.queryAllByText(
      /Adjust oven rack to lowest position and preheat/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<DetroitStyle />);
    const alert = screen.queryAllByText(/Remember to over season your sauce/i);
    expect(alert).toBeDefined();
  });
});
