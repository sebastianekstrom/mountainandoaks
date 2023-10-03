import React from "react";
import { render, screen } from "@testing-library/react";
import BanhMiBun from "pages/bread/banh-mi-bun";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BanhMiBun page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/banh-mi-bun",
    });
  });

  it("renders title correctly", () => {
    render(<BanhMiBun />);
    const title = screen.queryAllByText(/Bánh mì bun/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BanhMiBun />);
    const ingress = screen.queryAllByText(
      /This iconic Vietnamese bread is known/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<BanhMiBun />);
    const waterLabel = screen.queryAllByText(/Water/i);
    const eggLabel = screen.queryAllByText(/Egg/i);
    expect(waterLabel).toBeDefined();
    expect(eggLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<BanhMiBun />);
    const step = screen.queryAllByText(
      /Start by melting the butter over low heat/i
    );
    expect(step).toBeDefined();
  });
});
