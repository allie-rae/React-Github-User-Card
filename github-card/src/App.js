import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersList';
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
    <h1>Allie's GitHub Info</h1>
    <UserCard user={this.state.user} />
    <h2>Followers:</h2>    
    <FollowersCard />
    </>
  )
}
}

export default App;
