import React from "react";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import "./filter-panel.css";

const FilterPanel = ({ onSearch, searchValue, filter, onFilterChange }) => {
  return (
    <div className="filter-panel">
      <SearchPanel onSearch={onSearch} searchValue={searchValue} />
      <ItemStatusFilter filter={filter} onFilterChange={onFilterChange} />
    </div>
  );
};

export default FilterPanel;
