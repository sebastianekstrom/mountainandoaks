import React from "react";
import { render, screen } from "@testing-library/react";
import NYStyle from "pages/pizza/new-york-style";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NYStyle page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/hamburger-bun",
    });

    render(<NYStyle />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/New York style pizza dough/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /This New York-style pizza is all about/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Flour (Tipo 00)/i);
    const waterLabel = screen.queryAllByText(/Water/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(
      /Knead the dough. If using a stand mixer/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    const alert = screen.queryAllByText(/I usually go for 280g/i);
    expect(alert).toBeDefined();
  });
});
