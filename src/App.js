import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Users from './components/Users/Users'
import Sites from './components/Sites/Sites';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/sites" component={Sites} />
            <Route path="/" exact component={Users} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
