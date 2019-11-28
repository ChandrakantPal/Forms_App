import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Typography, Button, withStyles, Chip , Link} from '@material-ui/core';
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
        forms: [],
    }

    componentDidMount () {
        firebase
        .firestore()
        .collection('engineers')
        .where("user_id", ">=", `${this.props.user.uid}`)
        .onSnapshot(queryOnSnapshot => {
            const form = []; 
            queryOnSnapshot.forEach(doc => {
                console.log(doc.data());
                const {forms} = doc.data();
                form.push({
                  key: doc.id,
                  forms
                });
              this.setState({forms: form}); 
            })
        })

    }

    render () {
        const link = this.state.forms.map(form => (
            <Link key={form.key} href={form.form} style={{margin: '10px 0px' ,display: 'flex', flexDirection: 'column'}}><span role="img" aria-label="memo">📝Site From</span></Link>
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
                    <Button size="medium" color="primary">Site</Button>
                    <Button size="medium" color="primary">Forms</Button>
                    <Chip
                        // icon={<FaceIcon />}
                        label="Clickable deletable"
                        // onClick={handleClick}
                        // onDelete={handleDelete}
                    />
                    {link}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(UserProfile);