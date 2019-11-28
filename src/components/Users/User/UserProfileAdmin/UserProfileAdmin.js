import React, { Component, Fragment } from 'react';
import { Card, CardContent, CardHeader, Typography, Dialog, DialogTitle, DialogContent, TextField, Button, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import firebase from '../../../../Firebase';

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

class UserProfileAdmin extends Component {

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
        const { classes } = this.props;
        return (
            <Fragment>
            <Card>
                <CardContent  className={classes.cardContent}>
                    <CardHeader 
                        title={this.state.user.user_name}
                        subheader="test"
                    />

                    <Typography variant="h6">{this.state.user.user_name}</Typography>
                    <Button size="medium" color="primary">Site</Button>
                    <Button size="medium" color="primary">Forms</Button>
                </CardContent>
            </Card>
            <AddIcon onClick={this.openDialog} />
          <Dialog open={this.state.open} onEnter={console.log('Hey.')} onClose={this.closeDialog}>
            <DialogTitle>ADD Sites</DialogTitle>
              <DialogContent>
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    name="newForm"
                    type="text"
                    label="Add Form"
                    value={this.state.newForm}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >Add Forms</Button>
                </form>
              </DialogContent>
          </Dialog>
          </Fragment>
        );
    
    }

    openDialog = () => {
        this.setState({ open: true });
    }
  
    closeDialog = () => {
      this.setState({ open: false });
  
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = (event) => {
        event.preventDefault();
       
      } 
}

export default  withStyles(styles)(UserProfileAdmin);