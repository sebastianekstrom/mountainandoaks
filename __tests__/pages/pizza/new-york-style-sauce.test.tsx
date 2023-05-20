import React from "react";
import { render, screen } from "@testing-library/react";
import NYSauce from "pages/pizza/new-york-style-sauce";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NYSauce page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });

    render(<NYSauce />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/New York style pizza sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /This tomato sauce is quite salty to balance the sweetness/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Canned tomatoes/i);
    const waterLabel = screen.queryAllByText(/Tomato paste/i);
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
