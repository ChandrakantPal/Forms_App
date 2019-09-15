import React, { Component } from 'react';
import User from './User/User';

class Users extends Component {
  state = {
    persons: [{id: 'sfgysv', name: 'Max', mail: 'user@user.com' },
              {id: 'gewygu', name: 'Manu', mail: 'user@user.com' },
              {id: 'ghfgug', name: 'Stephanie', mail: 'user@user.com' }] 
  }


  render () {
    const user = this.state.persons.map(person => (
        <User 
          key={person.id} 
          name={person.name} 
          mail={person.mail} />
     ));
    return (
      <div>
        {user}
      </div>);
  }
}

export default Users;