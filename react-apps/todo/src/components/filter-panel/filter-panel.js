import React from "react";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import "./filter-panel.css";
const FilterPanel = ({ onSearch, searchValue }) => {
  return (
    <div className="filter-panel">
      <SearchPanel onSearch={onSearch} searchValue={searchValue} />
      <ItemStatusFilter />
    </div>
  );
};

export default FilterPanel;
