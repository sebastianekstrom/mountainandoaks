import { FilterButtons } from "components/FilterButtons/FilterButtons";
import { MapPinIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import { Text } from "components/Text/Text";
import { bodyFont } from "components/Text/Text";
type ViewMode = "map" | "grid";

interface FilterLabelType {
  label: string;
  value: string;
  disabled: boolean;
}

interface RestaurantFiltersProps {
  filterLabels: FilterLabelType[];
  filter: string;
  viewMode: ViewMode;
  onFilterChange: (filter: string) => void;
  onViewModeChange: (mode: ViewMode) => void;
  visitedCount: number;
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RestaurantFilters: React.FC<RestaurantFiltersProps> = ({
  filterLabels,
  filter,
  viewMode,
  onFilterChange,
  onViewModeChange,
  visitedCount,
  searchQuery,
  handleSearchChange,
}) => {
  return (
    <div className="flex mt-2 justify-center md:justify-start flex-wrap gap-2 md:gap-8">
      {visitedCount > 0 && (
        <FilterButtons
          filters={filterLabels}
          onFilterChange={onFilterChange}
          activeFilter={filter}
        />
      )}

      <div className="flex border border-brand rounded-md overflow-hidden">
        <button
          type="button"
          onClick={() => onViewModeChange("map")}
          className={`px-3 py-1 text-sm ${
            viewMode === "map" ? "bg-brand" : "bg-brand-secondary"
          }`}
        >
          <div className="flex items-center gap-[2px]">
            <MapPinIcon
              className={`h-4 w-4 ${
                viewMode === "map" ? "text-white" : "text-black"
              }`}
              aria-hidden="true"
            />
            <Text
              variant="badge"
              classNames={`${viewMode === "map" ? "text-white" : "text-black"}`}
            >
              Map
            </Text>
          </div>
        </button>
        <button
          type="button"
          onClick={() => onViewModeChange("grid")}
          className={`px-3 py-1 text-sm ${
            viewMode === "grid" ? "bg-brand" : "bg-brand-secondary"
          }`}
        >
          <div className="flex items-center gap-[2px]">
            <ViewColumnsIcon
              className={`h-4 w-4 ${
                viewMode === "grid" ? "text-white" : "text-black"
              }`}
              aria-hidden="true"
            />
            <Text
              variant="badge"
              classNames={`${viewMode === "map" ? "text-black" : "text-white"}`}
            >
              List
            </Text>
          </div>
        </button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        autoComplete="off"
        onChange={handleSearchChange}
        className={`${bodyFont.variable} focus:outline-none focus:shadow-outline bg-brand-secondary placeholder-slate-500 appearance-none text-black font-sans text-[16px] md:text-[12px] leading-[14px] border border-brand rounded-md px-3 py-1`}
      />
    </div>
  );
};
