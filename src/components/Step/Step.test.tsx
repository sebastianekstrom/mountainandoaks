import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Step } from "./Step";
import "@testing-library/jest-dom";

describe("Step component", () => {
  const defaultProps = {
    index: 0,
    step: "Test step",
    id: "test-id",
  };

  it("renders without crashing", () => {
    render(<Step {...defaultProps} />);
  });

  it("renders the step content correctly", () => {
    render(<Step {...defaultProps} />);
    expect(screen.getByText(defaultProps.step)).toBeDefined();
  });

  it("toggles the 'isCompleted' state when clicked", () => {
    render(<Step {...defaultProps} />);
    const stepButton = screen.getByRole("button");

    expect(stepButton).toHaveTextContent("1");

    userEvent.click(stepButton);

    userEvent.click(stepButton);

    expect(stepButton).toHaveTextContent("1");
  });

  it("doesn't toggle the 'isCompleted' state when 'completable' is false", () => {
    render(<Step {...defaultProps} completable={false} />);
    const stepButton = screen.getByRole("button");
    userEvent.click(stepButton);
    expect(stepButton).toHaveTextContent("1");
  });

  it("reduces button's opacity when 'isCompleted' state is true", () => {
    render(<Step {...defaultProps} />);
    const stepButton = screen.getByRole("button").children[0];

    waitFor(() => expect(stepButton).toHaveClass("opacity-10"));
    userEvent.click(stepButton);
    expect(stepButton).not.toHaveClass("opacity-10");
  });

  it("shows a check icon when 'isCompleted' state is true", () => {
    render(<Step {...defaultProps} />);
    const stepButton = screen.getByRole("button");
    userEvent.click(stepButton);
    waitFor(() =>
      expect(screen.getByLabelText("completed")).toBeInTheDocument()
    );
  });
});
