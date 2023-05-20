import React from "react";
import { render, screen } from "@testing-library/react";
import NeopolitanSauce from "pages/pizza/neapolitan-style-sauce";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NeopolitanSauce page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });

    render(<NeopolitanSauce />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Neapolitan style pizza sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /There's a lot of variants for the tomato sauce/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Canned San Marzano tomatoes/i);
    const waterLabel = screen.queryAllByText(/Leaves of fresh basil/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(/When the pan has heated up, add the/i);
    expect(step).toBeDefined();
  });
});
