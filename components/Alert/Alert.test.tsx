import React from "react";
import { render, screen } from "@testing-library/react";

import { Alert } from "./Alert";

describe("Alert component", () => {
  test("renders default title when no title is provided", () => {
    render(<Alert description="Test description" />);
    expect(screen.getByText("Tip!")).toBeDefined();
  });

  test("renders custom title when provided", () => {
    render(<Alert title="Custom Title" description="Test description" />);
    expect(screen.getByText("Custom Title")).toBeDefined();
  });

  test("renders description", () => {
    render(<Alert description="Test description" />);
    expect(screen.getByText("Test description")).toBeDefined();
  });
});
