import { render, screen } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  const tooltipText = "This is a tooltip";

  beforeEach(() => {
    render(<Tooltip value={tooltipText} />);
  });

  it("should not show the tooltip by default", () => {
    expect(screen.queryByText(tooltipText)).toBeNull();
  });
});
