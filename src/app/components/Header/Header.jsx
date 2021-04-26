import React, { Component } from "react";
import Search from "../Search/Search";
import Listing from 'App/components/Listing/Listing';
import { Wrapper, Content } from "./Header.styled";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {

    const {data} = this.props;

    const filteredData = data.filter(data =>
      data.name.first.toLowerCase().includes(this.state.searchField.toLowerCase())
      )

    return (
      <div>
      <Wrapper>
        <Content>
          <h1>Find a member of Staff </h1>
          <p>Use the search box to get started</p>
          <Search
            placeholder="Start typing..."
            handleChange={this.handleChange}
          />
        </Content>
      </Wrapper>
      <Listing data={filteredData}/>
      </div>
    );
  }
}

export default Header;
