import type React from "react";
import { Text } from "components/Text/Text";

interface FilterButtonsProps {
  filters: { label: string; value: string }[];
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
          className={`bg-brand text-black px-2 py-1 rounded-md ${
            activeFilter === filter.value ? "bg-brand-secondary" : ""
          }`}
        >
          <Text
            variant="badge"
            classNames={`${
              activeFilter === filter.value ? "text-black" : "text-white"
            }`}
          >
            {filter.label}
          </Text>
        </button>
      ))}
    </div>
  );
};
