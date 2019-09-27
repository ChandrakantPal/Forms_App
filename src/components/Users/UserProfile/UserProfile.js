import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Avatar } from '@material-ui/core';
class UserProfile extends Component {
    render () {
        return (
            <Card>
                <CardContent>
                    <CardHeader 
                        avatar={<Avatar aria-label="User">AB</Avatar>}
                        title={this.props.name}
                        subheader={this.props.mail} />
                </CardContent>
            </Card>
        );
    }
}

export default UserProfile;