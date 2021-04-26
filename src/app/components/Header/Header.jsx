import React, { Component } from 'react'
import Search from '../Search/Search';
import { Wrapper, Content } from "./Header.styled";

class Header extends Component {
  constructor(){
    super();
    this.state = {
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }
  render() {
    return (
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
    )
  }
}

export default Header
