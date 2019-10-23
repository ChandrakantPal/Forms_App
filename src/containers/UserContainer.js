import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
// import { Route, Switch } from 'react-router-dom';
import UserProfile from '../components/Users/UserProfile/UserProfile';
// import SiteProfile from '../components/Sites/Site/SiteProfile/SiteProfile'; 

class UserContainer extends Component {
    render() {
        const { user } = this.props;
        return (
            <Layout {...this.props}>
                    <UserProfile user={user} /> 
            </Layout>
        );
    }
}

export default UserContainer;