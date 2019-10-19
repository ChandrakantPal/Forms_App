import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Typography, Button, withStyles, Grid } from '@material-ui/core';
// import firebase from '../../../Firebase';

const styles ={
    cardContent: {
        padding: 'auto'
    },
    profile_pic: {
        borderRadius: '999px', 
        borderStyle: '1px'
    }
}

class UserProfile extends Component {
    // state = {
    //     user: {}
    // }

    componentDidMount () {
        // firebase
        //     .firestore()
        //     .collection('users')
        //     .doc(this.props.match.params.id).get().then(doc => {
        //         console.log(doc.data());
        //         const data = doc.data();
        //         this.setState({user: data});
        //     });
    }

    render () {
        console.log(this.props);
        const {classes, user} = this.props;
        return (
            <Grid container >
                <Grid item sm/>
                <Grid item sm>

            <Card>
                <CardContent  className={classes.cardContent}>
                    <CardHeader 
                        title={user.displayName}
                        subheader={user.email} 
                    />
                    <img className={classes.profile_pic} src={user.photoURL} alt="profile"/>
                    <Typography variant="h6">{user.displayName}</Typography>
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