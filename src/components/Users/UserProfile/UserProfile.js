import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Typography, Button, withStyles, Chip ,} from '@material-ui/core';
import firebase from '../../../Firebase';

const styles ={
    cardContent: {
        padding: 'auto',
        textAlign: 'center'
    },
    profile_pic: {
        width: '200px',
        height: '200px',
        borderRadius: '999px', 
        borderStyle: '1px'
    }
}

class UserProfile extends Component {
    state = {
        sites: [],
    }

    componentDidMount () {
        firebase
        .firestore()
        .collection('sites')
        .where("user_id", "array-contains", `${this.props.user.uid}`)
        .onSnapshot(queryOnSnapshot => {
            console.log(queryOnSnapshot);
            const sites = [];
            queryOnSnapshot.forEach(doc => {
               const { site_no, site_address } = doc.data()
               sites.push({site_no: site_no, site_address: site_address, site_id: doc.id});
               this.setState({sites: sites});
               console.log(this.state)
            })
        
        })

    }

    render () {
        const site = this.state.sites.map((site, i )=> (
            <Chip      key={i} 
                        // icon={<FaceIcon />}
                        label={`Site ${site.site_no}`}
                        // onClick={() => this.handleClick(site.site_id)}
                        // onDelete={handleDelete}
                    />
        ));
        console.log(this.props);
        const {classes, user} = this.props;
        return (
            <Card>
                <CardContent  className={classes.cardContent}>
                    <CardHeader 
                        title={user.displayName}
                        subheader={user.email} 
                    />
                    <img className={classes.profile_pic} src={user.photoURL} alt="profile"/>
                    <Typography variant="h6">{user.displayName}</Typography>
                    {/* <Button size="medium" color="primary">Site</Button>
                    <Button size="medium" color="primary">Forms</Button> */}
                    {/* <Chip
                        // icon={<FaceIcon />}
                        label="Clickable deletable"
                        // onClick={handleClick}
                        // onDelete={handleDelete}
                    /> */}
                    {/* {link} */}
                    <Typography variant="h6">Site Assignied</Typography>
                    {site}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(UserProfile);