import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
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
    console.log(res.data)
    this.setState({
      user: res.data
    })
  })
  .catch(err => console.log("err", err))
}

render() {
  return (
    <UserCard user={this.state.user} />
  )
}
}

export default App;
