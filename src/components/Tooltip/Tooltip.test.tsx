import { render, screen } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    /* eslint-disable @next/next/no-img-element */
    return <img {...props} alt="" />;
    /* eslint-enable @next/next/no-img-element */
  },
}));

describe("Tooltip", () => {
  const tooltipText = "This is a tooltip";

  beforeEach(() => {
    render(<Tooltip value={tooltipText} />);
  });

  it("should not show the tooltip by default", () => {
    expect(screen.queryByText(tooltipText)).toBeNull();
  });
});
