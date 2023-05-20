import React from "react";
import { render, screen } from "@testing-library/react";
import HybridDough from "pages/pizza/hybrid-dough";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("HybridDough page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });

    render(<HybridDough />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/The hybrid pizza dough/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /This dough is the result of me experimenting/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Poolish/i);
    const waterLabel = screen.queryAllByText(/Dough/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Place the poolish in the fridge for between/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    const alert = screen.queryAllByText(/to see if the dough is ready/i);
    expect(alert).toBeDefined();
  });
});
