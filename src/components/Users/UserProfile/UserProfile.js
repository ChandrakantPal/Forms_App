import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Typography, withStyles, Chip, Link } from '@material-ui/core';
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
        forms: []
    }

    componentDidMount () {
        firebase
        .firestore()
        .collection('sites')
        .where("user_id", "array-contains", `${this.props.user.uid}`)
        .onSnapshot(queryOnSnapshot => {
            console.log(queryOnSnapshot);
            const sites = [];
            const form = [];
            queryOnSnapshot.forEach(doc => {
               const { site_no, site_address, forms } = doc.data()
               sites.push({site_no: site_no, site_address: site_address, site_id: doc.id});
               form.push(forms);
               this.setState({sites: sites, forms: form });
               console.log(this.state)
            });
        });
    }

    render () {
        const site = this.state.sites.map((site, i )=> (
            <Chip key={i} label={`Site ${site.site_no}`}/>
        ));
        const link = this.state.forms.map((form, i) => (
            <Link key={i} href={form} style={{margin: '10px 0px' ,display: 'flex', flexDirection: 'column'}}><span role="img" aria-label="memo">📝Site From</span></Link>
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
                    <Typography variant="h6">Site Assignied</Typography>
                    {site}
                    <Typography variant="h6">Forms</Typography>
                    {link}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(UserProfile);