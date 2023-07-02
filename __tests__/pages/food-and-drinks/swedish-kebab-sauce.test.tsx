import React from "react";
import { render, screen } from "@testing-library/react";
import SwedishKebabSauce from "pages/food-and-drinks/swedish-kebab-sauce";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SwedishKebabSauce page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/swedish-kebab-sauce",
    });

    render(<SwedishKebabSauce />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Swedish kebab sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /I've finally managed to recreate the kebab sauce that's used/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Fanta/i);
    const waterLabel = screen.queryAllByText(/Mayonnaise/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Add all the ingredients in a container/i
    );
    expect(step).toBeDefined();
  });
});
