import { render, screen } from "@testing-library/react";

import Home from "pages/index";

describe("Home", () => {
  it("renders recipe titles", () => {
    render(<Home />);
    expect(screen.getByText("Pasta Bolognese")).toBeDefined();
    expect(screen.getByText("Birria tacos")).toBeDefined();
  });

  it("renders category sections", () => {
    render(<Home />);
    expect(screen.getAllByText("Pizza").length).toBeGreaterThan(0);
    expect(screen.getByText("Mmmm... bread")).toBeDefined();
  });
});
