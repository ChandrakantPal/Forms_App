import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Grid, Dialog, DialogTitle, DialogContent, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import firebase from '../../../../Firebase';

class Site extends Component {
    state = {
        forms: [],
        site: {},
        opne: false,
        newForm: '',
        newFormNumber: ''
    }

    componentDidMount () {
        firebase
            .firestore()
            .collection('sites')
            .doc(this.props.match.params.id).get().then(doc => {
                console.log(doc.data());
                const data = doc.data();
                this.setState({site: data});
            });
        firebase
            .firestore()
            .collection('sites')
            .doc(this.props.match.params.id).collection('forms')
            .onSnapshot(querySnapshot => {
              const forms = []; 
              querySnapshot.forEach(doc => {
              const {form} = doc.data();
                forms.push({
                key: doc.id,
                doc, // DocumentSnapshot
                form
              });
              
            this.setState({forms: forms});
              console.log(form); 
        });
            })

    }

    render () {
        const link = this.state.forms.map(form => (
            <a key={form.key} href={form.form} style={{margin: '10px 0px' ,display: 'flex', flexDirection: 'column'}}>Site From</a>
        ));
        return (
            <Grid container >
                <Grid item sm/>
                <Grid item sm>
                <Card>
                <CardContent>
                    <CardHeader
                        avatar={<Avatar aria-label="Site">S</Avatar>}
                        title={this.state.site.site_no}
                        subheader={this.state.site.site_address}/>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body1">{this.state.site.site_address}</Typography>   
                    <Typography variant="h6">Contact</Typography>
                    <Typography variant="body1">12345.....</Typography>
                    {link}  
                </CardContent>   
            </Card>
            <AddCircleOutlineOutlinedIcon onClick={this.openDialog} />
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
                </Grid>
                <Grid item sm/>
            </Grid>
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
        const forms = {
            form: this.state.newForm
        }
        firebase
          .firestore()
          .collection('sites')
          .doc(this.props.match.params.id).collection('forms')
          .add(forms).then(res => {
            console.log(res);
            this.setState({open: false, newForm: ''});
          }).catch(err => {
            console.log(err);
          })
      } 
}

export default Site;