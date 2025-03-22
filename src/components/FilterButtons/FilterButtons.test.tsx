import { render, fireEvent } from "@testing-library/react";
import { FilterButtons } from "./FilterButtons";

describe("FilterButtons", () => {
  it("calls onFilterChange with the correct filter when buttons are clicked", () => {
    const mockOnFilterChange = jest.fn();
    const { getByText } = render(
      <FilterButtons
        filters={[
          { label: "All", value: "all" },
          { label: "Visited", value: "visited" },
          { label: "Not visited", value: "not_visited" },
        ]}
        onFilterChange={mockOnFilterChange}
        activeFilter="all"
      />,
    );

    fireEvent.click(getByText("All"));
    expect(mockOnFilterChange).toHaveBeenCalledWith("all");

    fireEvent.click(getByText("Visited"));
    expect(mockOnFilterChange).toHaveBeenCalledWith("visited");

    fireEvent.click(getByText("Not visited"));
    expect(mockOnFilterChange).toHaveBeenCalledWith("not_visited");
  });
});
