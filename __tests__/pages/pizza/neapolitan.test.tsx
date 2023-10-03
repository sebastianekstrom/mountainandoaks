import React from "react";
import { render, screen } from "@testing-library/react";
import Neapolitan from "pages/pizza/neapolitan";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Neapolitan page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/pizza/neapolitan",
    });
  });

  it("renders title correctly", () => {
    render(<Neapolitan />);
    const title = screen.queryAllByText(/Neapolitan style pizza dough/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Neapolitan />);
    const ingress = screen.queryAllByText(/The classic of the classics/i);
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<Neapolitan />);
    const flourLabel = screen.queryAllByText(/Flour (Tipo 00)/i);
    const waterLabel = screen.queryAllByText(/Salt/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<Neapolitan />);
    const step = screen.queryAllByText(
      /Transfer the dough to a lightly oiled bowl/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<Neapolitan />);
    const alert = screen.queryAllByText(/For optimal results I recommend/i);
    expect(alert).toBeDefined();
  });
});
