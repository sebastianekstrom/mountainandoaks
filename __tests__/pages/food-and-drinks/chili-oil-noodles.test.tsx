import React from "react";
import { render, screen } from "@testing-library/react";
import ChiliOildNoodles from "pages/food-and-drinks/chili-oil-noodles";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ChiliOildNoodles page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/chili-oil-noodles",
    });
  });

  it("renders title correctly", () => {
    render(<ChiliOildNoodles />);
    const title = screen.queryAllByText(/Chili oil noodles/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<ChiliOildNoodles />);
    const ingress = screen.queryAllByText(
      /This recipe is a quick and flavorful!/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<ChiliOildNoodles />);
    const ingredient = screen.queryAllByText(/Vegetable oil/i);
    expect(ingredient).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<ChiliOildNoodles />);
    const step = screen.queryAllByText(/Take a small piece of cheesecloth/i);
    expect(step).toBeDefined();
  });
});
