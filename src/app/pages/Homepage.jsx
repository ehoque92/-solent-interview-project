import React, { Component } from 'react';
import Header from 'Components/Header/Header';
import Listing from 'App/components/Listing/Listing';

class Homepage extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Header/>
                <Listing/>
            </div>
        );

    }
};

export default Homepage;
