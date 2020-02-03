import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.onLabelChange = this.onLabelChange.bind(this);
  }

  onLabelChange(e) {
    this.props.onSearch(e.target.value);
  }

  render() {
    const searchText = "Search..";
    const { searchValue } = this.props;

    return (
      <form className="search-panel">
        <input
          type="text"
          placeholder={searchText}
          className="form-control"
          value={searchValue}
          onChange={this.onLabelChange}
        />
      </form>
    );
  }
}
