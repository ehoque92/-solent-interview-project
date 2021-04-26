import React, { Component } from "react";

import Modal from "App/components/Modal/Modal";

import {
  Wrapper,
  ProfileCard,
  ProfileImg,
  ProfileName,
} from "./Listing.styled";


class Listing extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const card = this.props.data.map((p, idx) => (
      <ProfileCard key={idx} onClick={this.handleClick}>
        <ProfileImg src={p.picture.thumbnail} />
        <ProfileName>
          {p.name.first} {p.name.last}  <i className="fas fa-arrow-circle-right"></i>
        </ProfileName>
        <Modal
            key={idx} 
            thumbnail={p.picture.thumbnail}
            fName={p.name.first}
            lName={p.name.last}
            email={p.email}
            dob={p.dob.date}
            cell={p.cell}
            onClose={this.handleClick}
            show={this.state.show}
          />
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
