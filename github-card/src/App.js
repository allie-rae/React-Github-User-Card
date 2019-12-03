import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersList';
import { Typography } from '@material-ui/core';
import './App.css';

class App extends Component {
constructor() {
  super()
  this.state = {
    user: []
  }
}

componentDidMount() {
  axios.get("https://api.github.com/users/allie-rae")
  .then(res => {
    this.setState({
      user: res.data
    })})
  }
  

render() {
  return (
    <>
    <br />
    <Typography align="center" variant="h2">Allie's GitHub Info</Typography>
    <UserCard user={this.state.user} />
    <Typography align="center" variant="h4">Followers:</Typography>    
    <FollowersCard />
    </>
  )
}
}

export default App;
