import React, { Component } from 'react';
import UserLayout from '../components/Layout/UserLayout';
import { Route } from 'react-router-dom';
import UserProfile from '../components/Users/UserProfile/UserProfile';
// import SiteProfile from '../components/Sites/Site/SiteProfile/SiteProfile'; 

class UserContainer extends Component {
    render() {
        const { user } = this.props;
        return (
            <UserLayout {...this.props}>
                <Route path={`/${user.displayName}`} exact ><UserProfile user={user} /></Route> 
            </UserLayout>
        );
    }
}

export default UserContainer;