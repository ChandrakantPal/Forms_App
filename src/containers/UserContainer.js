import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import { Route } from 'react-router-dom';
import UserProfile from '../components/Users/UserProfile/UserProfile';
// import SiteProfile from '../components/Sites/Site/SiteProfile/SiteProfile'; 

class UserContainer extends Component {
    render() {
        const { user } = this.props;
        return (
            <Layout {...this.props}>
                <Route path={`/${user.displayName}`} exact ><UserProfile user={user} /></Route> 
            </Layout>
        );
    }
}

export default UserContainer;