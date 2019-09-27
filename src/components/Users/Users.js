import React, { Component, Fragment } from 'react';
import User from './User/User';
import { List, Divider} from '@material-ui/core'

class Users extends Component {
  state = {
    persons: [{id: 'sfgysv', name: 'Max', mail: 'user1@user.com' },
              {id: 'gewygu', name: 'Manu', mail: 'user2@user.com' },
              {id: '1gewygu', name: 'Sanjay', mail: 'user2@user.com' },
              {id: '2gewygu', name: 'Chandrakant', mail: 'user2@user.com' },
              {id: '3gewygu', name: 'User', mail: 'user2@user.com' },
              {id: 'ghfgug', name: 'Stephanie', mail: 'user3@user.com' }] 
  }

  userClickHandler = () =>{
    this.props.history.push("/userP");
  }


  render () {
    const user = this.state.persons.map(person => (
      <Fragment key={person.id} >
        <User 
          name={person.name} 
          mail={person.mail}
          clicked={this.userClickHandler} />
        <Divider variant="inset" component="li" />
      </Fragment>
     ));
    return (
      <List>
        {user}
      </List>
      );
  }
}

export default Users;