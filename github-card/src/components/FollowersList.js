import React, { Component } from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';


class FollowersList extends Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/allie-rae/followers")
        .then(res => {
          this.setState({
            followers: res.data
          })})
    }

render() {
    return <p>{this.state.followers.map(follower => <FollowerCard follower={follower} />)}</p>
}

}

export default FollowersList;