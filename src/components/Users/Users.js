import React, { Component, Fragment } from 'react';
import User from './User/User';
import { List, Divider} from '@material-ui/core';
import firebase from '../../Firebase';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }


  componentDidMount() {
    firebase
    .firestore()
    .collection('users')
    .orderBy('user_name')
    .onSnapshot(querySnapshot => {
      const users = [];
      querySnapshot.forEach(doc => {
        const { user_name , dept } = doc.data();
        users.push({
          key: doc.id,
          doc, // DocumentSnapshot
          user_name,
          dept
        });
        // console.log('users []' ,  users);
      });

    this.setState({users: users});
    console.log('user state',this.state);
    });
    // console.log('componentDidMount');
    // firebase
    // .firestore()
    // .collection('notes').get().then(querySnapshot => {
    //   querySnapshot.docs.forEach(doc => {
    //     console.log(doc.data());
        
    //   })
    // })
  }

  userClickHandler = (id) =>{
    // this.props.history.push("/user/" + id );
    console.log(this.state);
    
  }


  render () {
    const user = this.state.users.map(person => (
      <Fragment key={person.key} >
        <User 
          id={person.key}
          name={person.user_name} 
          mail={person.dept}
          clicked={() => this.userClickHandler(person.key)} />
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