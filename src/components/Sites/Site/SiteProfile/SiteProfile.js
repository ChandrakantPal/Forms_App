import React, { Component, Fragment } from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Dialog, DialogTitle, DialogContent, TextField, Button, Link, Fab, Select, MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Loader from '../../../Loader/Loader';

import firebase from '../../../../Firebase';
 
class Site extends Component {
    state = {
        forms: [],
        site: {},
        open: false,
        openEngineer: false,  
        newForm: '',
        newFormNumber: '',
        loading: true,
        engineers: [],
        select_engineer: {}
    }

    componentDidMount () {

      const doc_ref = firebase.firestore().collection('sites').doc(this.props.match.params.id);
      //getting the site data
      doc_ref
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.data();
        this.setState({site: data});
      });

      // getting the forms data
      doc_ref
      .collection('forms')
      .onSnapshot(querySnapshot => {
        const forms = []; 
        querySnapshot.forEach(doc => {
          const {form} = doc.data();
          forms.push({
            key: doc.id,
            form
          });
        this.setState({forms: forms}); 
        });
      });

      //getting the engineers data
      firebase
      .firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const engineers = [];
        querySnapshot.forEach(doc => {
          const {user_name} = doc.data();
          engineers.push({
            userId: doc.id,
            user_name
          });
          this.setState({engineers: engineers, loading: false}); 
        })
      });

    }

    render () {
        const link = this.state.forms.map(form => (
            <Link key={form.key} href={form.form} style={{margin: '10px 0px' ,display: 'flex', flexDirection: 'column'}}><span role="img" aria-label="memo">📝Site From</span></Link>
        ));
        const select_engineeres = this.state.engineers.map(engineer => {
          const {userId, user_name} = engineer;
          return (
            <MenuItem key={userId} value={engineer}>{user_name}</MenuItem>
          )
        })
        return ( this.state.loading ? <Loader /> :
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
                    <Typography variant="h6">Engineers at Site</Typography>
                    
                    {link} 
                    <Fab variant="extended" onClick={this.openEngineerDialog}>Add Engineers</Fab>
                    <Dialog open={this.state.openEngineer} onEnter={console.log('Hey Engineers.')} onClose={this.closeDialog}>
                      <DialogTitle>ADD Engineers</DialogTitle>
                      <DialogContent>
                        <form onSubmit={this.addEngineerHandler}>
                          <Select value={this.state.select_engineer} onChange={this.selectChangeHandler} fullWidth>
                            {select_engineeres}
                          </Select>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{marginTop: '16px'}}
                          >Add Engineers</Button>
                        </form>
                      </DialogContent>
                    </Dialog> 
                </CardContent>   
            </Card>
            <Fab aria-label="add" onClick={this.openDialog} style={{position: 'fixed', bottom: '56px',right: '0', zIndex: '2', background: '#054e45e6', color: 'white'}}>
              <AddIcon />
            </Fab>
          <Dialog open={this.state.open} onEnter={console.log('Hey.')} onClose={this.closeDialog}>
            <DialogTitle>ADD Form</DialogTitle>
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
    openEngineerDialog = () => {
      this.setState({ openEngineer: true });
    }

    openDialog = () => {
        this.setState({ open: true });
    }
  
    closeDialog = () => {
      this.setState({ open: false, openEngineer: false });
  
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    //adding forms to db
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
      
  selectChangeHandler = (event) => {
    this.setState({
      select_engineer: event.target.value
    });
    console.log('selectChangeHandler', this.state);
    
  }

  //adding users to site
  addEngineerHandler = (event) => {
    event.preventDefault();
    const {userId, user_name} = this.state.select_engineer;
    const data = {
      user_id: userId,
      user_name: user_name,
      site_id: this.props.match.params.id,
      forms: this.state.forms
    }
    firebase
    .firestore()
    .collection('engineers').doc(this.props.match.params.id)
    .add(data)
    .then(res=>{
      console.log(res);
      this.setState({openEngineer: false, select_engineer: {}});
    })
  }
}

export default Site;