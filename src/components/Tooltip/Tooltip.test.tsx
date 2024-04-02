import { render, screen } from "@testing-library/react";

import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  const tooltipText = "This is a tooltip";

  it("should not show the tooltip by default", () => {
    render(<Tooltip value={tooltipText} />);
    expect(screen.queryByText(tooltipText)).toBeNull();
  });
});
