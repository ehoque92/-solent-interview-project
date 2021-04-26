import React, { Component } from 'react';
import axios from "axios";
import Header from 'Components/Header/Header';


const RANDOMPEOPLE_API = "https://randomuser.me/api?results=10";

class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
          };    
    }

    async componentDidMount() {
        let profile = await axios.get(`${RANDOMPEOPLE_API}`);
        this.setState({ users: profile.data.results });
        console.log(this.state.users);
      }

    render(){
        return (
            <div>
                <Header data={this.state.users}/>
            </div>
        );

    }
};

export default Homepage;
