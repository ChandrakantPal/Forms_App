import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users'
// import User from './components/User/User';
import Site from './components/Sites/Site/Site';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Users />
        <Site />
        {/* <User /> */}
      </div>
    );
  }
}
export default App;
