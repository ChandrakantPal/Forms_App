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

  render() {
    const {
      user, uid
    } = this.props;
    const adminPage = <AdminContainer {...this.props} />
    const userPage = <UserContainer {...this.props} />
    let page;
    if (uid === "TmfHp4FlWsQb4CndsGQjIPJLQTA3") {
      page = adminPage;

    } else {
      page = userPage;
    }

    return (
      <div>
        {/* <Layout {...this.props}> */}
        
          {/* <Switch>
            <Route path="/site/:id" component={SiteProfile} /> 
            <Route path="/sites" component={Sites} />
            <Route path="/users"><Users {...this.props} /></Route>
            <Route path="/" exact><UserProfile user={user} /> </Route>
          </Switch>  */}
          {user ? page : <SignIn {...this.props} />}
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
