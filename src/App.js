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
    isAdmin: false
  }

  signInWithGoogleHandler = () => {
    this.props.signInWithGoogle()
        .then(res => {
        if(res.user.uid === "TmfHp4FlWsQb4CndsGQjIPJLQTA3" ) {
          this.setState({isAdmin: true});
          console.log('admin');
          
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
