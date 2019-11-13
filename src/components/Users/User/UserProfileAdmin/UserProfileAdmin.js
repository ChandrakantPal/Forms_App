import React, { Component, Fragment } from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Dialog, DialogTitle, DialogContent, TextField, Button, Link } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


class UserProfileAdmin extends Component {

    render () {
        return (
                <Fragment>
                <Card>
                <CardContent>
                    <CardHeader
                        avatar={<Avatar aria-label="SiteEmoji"><span role="img" aria-label="site">🏢</span></Avatar>}
                        title={this.state.site.site_no}
                        subheader={this.state.site.site_address}/>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body1">{this.state.site.site_address}</Typography>   
                    <Typography variant="h6">Contact</Typography>
                    <Typography variant="body1">12345.....</Typography>
                     
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

export default UserProfileAdmin;