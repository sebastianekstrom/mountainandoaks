import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Step } from "./Step";

describe("<Step />", () => {
  it("should display the index when not completed", () => {
    render(<Step index={0} step="Test Step" completable={true} />);
    expect(screen.getByText("1")).toBeDefined();
  });

  it("should display the CheckIcon when completed", async () => {
    render(<Step index={0} step="Test Step" completable={true} />);
    await userEvent.click(screen.getByRole("button"));

    expect(await screen.findByLabelText("completed")).toBeDefined();
  });

  it("should not toggle completion if the step is not completable", async () => {
    render(<Step index={0} step="Test Step" completable={false} />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("1")).toBeDefined();
    await waitFor(() =>
      expect(screen.queryByLabelText("completed")).toBe(null)
    );
  });

  it("should display the step text", () => {
    render(<Step index={0} step="Test Step" completable={true} />);
    expect(screen.getByText("Test Step")).toBeDefined();
  });
});
