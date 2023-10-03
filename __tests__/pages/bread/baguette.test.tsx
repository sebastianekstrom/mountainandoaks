import React from "react";
import { render, screen } from "@testing-library/react";
import Baguette from "pages/bread/baguette";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Baguette page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/baguette",
    });
  });

  it("renders title correctly", () => {
    render(<Baguette />);
    const title = screen.queryAllByText(/Baguette/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Baguette />);
    const ingress = screen.queryAllByText(
      /This recipe will produce a light and fluffy baguette/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<Baguette />);
    const flourLabel = screen.queryAllByText(/Bread flour/i);
    const waterLabel = screen.queryAllByText(/Water/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<Baguette />);
    const step = screen.queryAllByText(/Mix the all the ingredients for the/i);
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<Baguette />);
    const alert = screen.queryAllByText(
      /Poke the dough lightly with your finger/i
    );
    expect(alert).toBeDefined();
  });
});
