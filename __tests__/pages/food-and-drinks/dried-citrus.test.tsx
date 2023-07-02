import React from "react";
import { render, screen } from "@testing-library/react";
import DriedCitrus from "pages/food-and-drinks/dried-citrus";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("DriedCitrus page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/dried-citrus",
    });

    render(<DriedCitrus />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Dried citrus/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /Take your cocktails to the next level/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Citruses of your choice/i);
    expect(flourLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Slice the citrus fruit into thin rounds/i
    );
    expect(step).toBeDefined();
  });
});
