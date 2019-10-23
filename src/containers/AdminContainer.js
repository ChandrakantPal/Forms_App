import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Users from '../components/Users/Users';
import Sites from '../components/Sites/Sites';

class AdminContainer extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <Switch>
                    <Route path="/sites" component={Sites} />
                    <Route path="/"><Users {...this.props} /></Route>
                </Switch>
            </Layout>
        );
    }
}

export default AdminContainer;
