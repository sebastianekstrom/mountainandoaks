import React from "react";
import { render, screen } from "@testing-library/react";
import Sebbys from "pages/pizza/sebbys";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Sebbys page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/food-and-drinks/sebbys",
    });

    render(<Sebbys />);
  });

  it("renders title correctly", () => {
    const title = screen.queryAllByText(/Sebby's/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    const ingress = screen.queryAllByText(
      /Every Swede knows about the glorious/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    const flourLabel = screen.queryAllByText(/Bread flour/i);
    const waterLabel = screen.queryAllByText(/Minced meat/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    const step = screen.queryAllByText(/Make the bolognese/i);
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    const alert = screen.queryAllByText(
      /I make my mirepoix with the 1:2:1 ratio/i
    );
    expect(alert).toBeDefined();
  });
});
