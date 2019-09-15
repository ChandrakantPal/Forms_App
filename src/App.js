import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users'
// import User from './components/User/User';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Users />
        {/* <User /> */}
      </div>
    );
  }
}
export default App;
