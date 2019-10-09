import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Users from './components/Users/Users'
import Sites from './components/Sites/Sites';
import { Route, Switch } from 'react-router-dom';
import UserProfile from './components/Users/UserProfile/UserProfile';
import SiteProfile from './components/Sites/Site/SiteProfile/SiteProfile';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/site/:id" component={SiteProfile} /> 
            <Route path="/user/:id" component={UserProfile} />
            <Route path="/sites" component={Sites} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" exact component={Users} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
