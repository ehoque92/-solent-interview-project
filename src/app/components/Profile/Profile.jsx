import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div>
                {this.props.fName}
            </div>
        )
    }
}

export default Profile;
