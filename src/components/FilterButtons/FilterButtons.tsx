import type React from "react";
import { Text } from "components/Text/Text";

interface FilterButtonsProps {
  filters: { label: string; value: string; disabled: boolean }[];
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

export const FilterButtons = ({
  filters,
  onFilterChange,
  activeFilter,
}: FilterButtonsProps) => {
  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onFilterChange(filter.value)}
          className={`bg-brand text-black px-3 py-2 md:px-2 md:py-1 rounded-md ${
            activeFilter !== filter.value ? "bg-brand-secondary" : ""
          }`}
          disabled={filter.disabled}
        >
          <Text
            variant="badge"
            classNames={`${
              activeFilter !== filter.value ? "text-black" : "text-white"
            }`}
          >
            {filter.label}
          </Text>
        </button>
      ))}
    </div>
  );
};
