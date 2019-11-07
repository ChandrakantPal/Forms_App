import React, { Component } from 'react';
// import Layout from './components/Layout/Layout';
// import Users from './components/Users/Users'
// import Sites from './components/Sites/Sites';
// import { Route, Switch } from 'react-router-dom';
// import UserProfile from './components/Users/UserProfile/UserProfile';
// import SiteProfile from './components/Sites/Site/SiteProfile/SiteProfile';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from './Firebase';
import SignIn from './components/Auth/SignIn';
import AdminContainer from './containers/AdminContainer';
import UserContainer from './containers/UserContainer';

class App extends Component {

  state = {
    isAdmin: Boolean
  }

  signInWithGoogleHandler = () => {
    this.props.signInWithGoogle()
        .then(res => {
        firebase
        .firestore()
        .collection('users').doc(res.user.uid).set({
          user_name: res.user.displayName
        },{ merge: true });
        console.log('user created');
        
        if(res.user.uid === "TmfHp4FlWsQb4CndsGQjIPJLQTA3" ) {
          firebase
          .firestore()
          .collection('users')
          .doc('TmfHp4FlWsQb4CndsGQjIPJLQTA3').get()
          .then(querySnapshot => {
            console.log('firestore',querySnapshot.data());
            const isAdmin = querySnapshot.data().isAdmin;
            this.setState({isAdmin: isAdmin});
            console.log('admin');

          })
          .catch(error => {
              console.log("Error getting documents: ", error);
          });
          
          
        } else {
          this.setState({isAdmin: false});
          console.log('user');
        }
    }
    );
}

  render() {
    const {
      user
    } = this.props;
    const adminPage = <AdminContainer {...this.props} />
    const userPage = <UserContainer {...this.props} />
    let page;
    if (this.state.isAdmin) {
      page = adminPage;

    } else {
      page = userPage;
    }
    console.log(this.state);
    
    return (
      <div>
        {/* <Layout {...this.props}> */}
        
          {/* <Switch>
            <Route path="/site/:id" component={SiteProfile} /> 
            <Route path="/sites" component={Sites} />
            <Route path="/users"><Users {...this.props} /></Route>
            <Route path="/" exact><UserProfile user={user} /> </Route>
          </Switch>  */}
          {user ? page : <SignIn auth={this.signInWithGoogleHandler} />}
        {/* </Layout> */}
      </div>
    );
  }
}
const firebaseAppAuth = firebase.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
