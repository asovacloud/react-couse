import React from "react";

const ItemStatusFilter = () => {
  return (
    <div className="btn-group" role="group" aria-label="First group">
      <button type="button" className="btn btn-info">
        All
      </button>
      <button type="button" className="btn btn-outline-info">
        Active
      </button>
      <button type="button" className="btn btn-outline-info">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
