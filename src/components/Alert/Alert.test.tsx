import { render, screen } from "@testing-library/react";
import React from "react";

import { Alert } from "./Alert";

describe("Alert component", () => {
  it("renders default title when no title is provided", () => {
    render(<Alert description="Test description" />);
    expect(screen.getByText("Tip!")).toBeDefined();
  });

  it("renders custom title when provided", () => {
    render(<Alert title="Custom Title" description="Test description" />);
    expect(screen.getByText("Custom Title")).toBeDefined();
  });

  it("renders description", () => {
    render(<Alert description="Test description" />);
    expect(screen.getByText("Test description")).toBeDefined();
  });
});
