import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Users title="1001" mail="p.chandrakant@novasemita.org" />
        <Users title="1001" mail="p.chandrakant@novasemita.org" />
        <Users title="1001" mail="p.chandrakant@novasemita.org" />
        <Users title="1001" mail="p.chandrakant@novasemita.org" />
        <Users title="1001" mail="p.chandrakant@novasemita.org" />
        <Users title="1001" mail="p.chandrakant@novasemita.org" />

      </div>
    );
  }
}
export default App;
