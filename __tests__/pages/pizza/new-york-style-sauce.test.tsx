import React from "react";
import { render, screen } from "@testing-library/react";
import NYSauce from "pages/pizza/new-york-style-sauce";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NYSauce page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/pizza/new-york-style-sauce",
    });
  });

  it("renders title correctly", () => {
    render(<NYSauce />);
    const title = screen.queryAllByText(/New York style pizza sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<NYSauce />);
    const ingress = screen.queryAllByText(
      /This tomato sauce is quite salty to balance the sweetness/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<NYSauce />);
    const flourLabel = screen.queryAllByText(/Canned tomatoes/i);
    const waterLabel = screen.queryAllByText(/Tomato paste/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<NYSauce />);
    const step = screen.queryAllByText(
      /Add all the ingredients in a container/i
    );
    expect(step).toBeDefined();
  });
});
