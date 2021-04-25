import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Modal from 'App/components/Modal/Modal';

import { Wrapper, ProfileCard, ProfileImg, ProfileName} from "./Listing.styled";

const RANDOMPEOPLE_API = "https://randomuser.me/api?results=10";

class Listing extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    let profile = await axios.get(`${RANDOMPEOPLE_API}`);
    this.setState({ users: profile.data.results });
    console.log(this.state.users);
  }

  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const card = this.state.users.map((p) => (
      <ProfileCard key={uuidv4()} onClick={this.handleClick}>
        <ProfileImg src={p.picture.thumbnail} />
        <ProfileName>{p.name.first} {p.name.last}</ProfileName>
        <Modal onClose={this.handleClick} show={this.state.show}/>
      </ProfileCard>
    ));
    return (
      <Wrapper>
        {card}
      </Wrapper>
    );
  }
}

export default Listing;


                