import React, { Component } from "react";
import {SearchField} from './Search.styled';

class Search extends Component {
  render() {
    return (
      <SearchField
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default Search;
