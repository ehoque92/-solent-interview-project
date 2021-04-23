import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, ProfileCard, ProfileImg, ProfileName} from "./ProfileList.styled";

const RANDOMPEOPLE_API = "https://randomuser.me/api?results=10";

class ProfileList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.alertmsg = this.alertmsg.bind(this);
  }

  async componentDidMount() {
    let profile = await axios.get(`${RANDOMPEOPLE_API}`);
    this.setState({ users: profile.data.results });
    console.log(this.state.users);
  }

  alertmsg(){
      alert('test');
  }

  render() {
    const card = this.state.users.map((p) => (
      <ProfileCard key={uuidv4()} onClick={this.alertmsg}>
        <ProfileImg src={p.picture.thumbnail} />
        <ProfileName>{p.name.first} {p.name.last}</ProfileName>
      </ProfileCard>
    ));
    return (
      <Wrapper>
        {card}
      </Wrapper>
    );
  }
}

export default ProfileList;
