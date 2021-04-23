import React from "react";

import { Wrapper, Content, Search } from "./Header.styled";

const Header = () => (
  <Wrapper>
    <Content>
    <h1>Find a member of Staff </h1>
    <p>Use the search box to get started</p>
    <Search placeholder='Start typing...'></Search>
    </Content>
  </Wrapper>
);

export default Header;
