import React, { Component } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Avatar, Typography, Button, withStyles, Grid } from '@material-ui/core';
import firebase from '../../../Firebase';

const styles ={
    cardContent: {
        position: 'relative'
    },
    cover: { 
        position: 'relative',
        height: '100px', 
        paddingTop: '56.25%'
    },
    profile_pic: {
        // position: 'relative', 
        // top: '50%' , 
        // left: '50%', 
        // borderRadius: '999px', 
        borderStyle: '1px'
    }
}

class UserProfile extends Component {
    state = {
        user: {}
    }

    componentDidMount () {
        firebase
            .firestore()
            .collection('users')
            .doc(this.props.match.params.id).get().then(doc => {
                console.log(doc.data());
                const data = doc.data();
                this.setState({user: data});
            });
    }

    render () {
        console.log(this.props);
        const classes = this.props;
        return (
            <Grid container >
                <Grid item sm/>
                <Grid item sm>

            <Card>
                <CardContent  className={classes.cardContent}>
                    <CardHeader 
                        avatar={<Avatar aria-label="User">AB</Avatar>}
                        title={this.state.user.user_name}
                        subheader={this.state.user.dept} 
                    />
                    <CardMedia className={classes.cover} image={"https://www.rbrlaw.com/sites/default/files/images/banner/Construction-Site-Premises-Accidents.jpg"} title="background"/>
                    <img className={classes.profile_pic} src="https://images-na.ssl-images-amazon.com/images/I/41r0oAaPp0L._AC_SY400_.jpg" alt="profile"/>
                    <Typography variant="h6">{this.state.user.user_name}</Typography>
                    <Typography variant="subtitle1">{this.state.user.dept}</Typography>
                    <Button size="medium">Edit profile</Button>
                    <Button size="medium" color="primary">Site</Button>
                    <Button size="medium" color="primary">Forms</Button>
                </CardContent>
            </Card>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}

export default withStyles(styles)(UserProfile);