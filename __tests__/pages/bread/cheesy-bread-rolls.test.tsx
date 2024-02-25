import React from "react";
import { render, screen } from "@testing-library/react";
import CheesyBreadRolls from "pages/bread/cheesy-bread-rolls";

describe("Cheesy bread rolls page", () => {
  it("renders title correctly", () => {
    render(<CheesyBreadRolls />);
    const title = screen.queryAllByText(/Cheesy bread rolls/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<CheesyBreadRolls />);
    const ingress = screen.queryAllByText(
      /Made with Manitoba flour, these rolls combine a chewy interior with a crispy/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<CheesyBreadRolls />);
    const flourLabel = screen.queryAllByText(/Manitoba flour/i);
    const waterLabel = screen.queryAllByText(/Water/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<CheesyBreadRolls />);
    const step = screen.queryAllByText(
      /Divide the dough into approximately 70-gram pieces/i
    );
    expect(step).toBeDefined();
  });
});
