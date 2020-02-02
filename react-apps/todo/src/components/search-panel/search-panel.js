import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  const searchText = "Search..";

  return (
    <div className="search-panel">
      <input type="text" placeholder={searchText} className="form-control" />
    </div>
  );
};

export default SearchPanel;
