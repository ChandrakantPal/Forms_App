import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Users from './components/Users/Users'
import Sites from './components/Sites/Sites';
import { Route, Switch } from 'react-router-dom';
import UserProfile from './components/Users/UserProfile/UserProfile';
import SiteProfile from './components/Sites/Site/SiteProfile/SiteProfile';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from './Firebase';
import SignIn from './components/Auth/SignIn';

class App extends Component {

  render() {
    const {
      user
    } = this.props;
    
    return (
      <div>
        <Layout {...this.props}>
        {user ? 
          <Switch>
            <Route path="/site/:id" component={SiteProfile} /> 
            <Route path="/sites" component={Sites} />
            <Route path="/users"><Users {...this.props} /></Route>
            <Route path="/" exact><UserProfile user={user} /> </Route>
          </Switch> : <SignIn {...this.props} />
        }
        </Layout>
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
