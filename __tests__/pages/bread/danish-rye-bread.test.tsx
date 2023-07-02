import React from "react";
import { render, screen } from "@testing-library/react";
import Danish from "pages/bread/danish-rye-bread";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Danish page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/danish-rye-bread",
    });

    render(<Danish />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Danish rye brad/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /A delicious sweet Danish rye bread that/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Bread flour (vetemjöl)/i);
    const waterLabel = screen.queryAllByText(/Water/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(/Grind the anise and fennel/i);
    expect(step).toBeDefined();
  });
});
