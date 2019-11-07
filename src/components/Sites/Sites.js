import React, { Component, Fragment } from 'react';
import Site from './Site/Site';
import { List, Divider, Dialog, DialogTitle, DialogContent, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import firebase from '../../Firebase';

class Sites extends Component {
  state = {
      sites: [],
      siteNumber: '',
      siteAddress: '',
      open: false
  }
      
  componentDidMount () {
    firebase
      .firestore()
      .collection('sites')
      .orderBy('site_no')
      .onSnapshot(querySnapshot => {
        const sites = [];
        querySnapshot.forEach(doc => {
          const { site_no , site_address } = doc.data();
          sites.push({
            key: doc.id,
            doc, // DocumentSnapshot
            site_no,
            site_address
          });
          // console.log('users []' ,  users);
        });
        this.setState({sites: sites});
        console.log('site state',this.state);
      });
  }

  siteClickHandler = (id) => {
    //   this.props.history.push("/site/" + id);
    console.log(id);
 }

  render () {
    const site = this.state.sites.map(site => (
      <Fragment key={site.key}>
        <Site 
          id={site.key}
          siteNumber={site.site_no} 
          address={site.site_address}  
          clicked={() => this.siteClickHandler(site.key)}/>
        <Divider variant="inset" component="li" />
    </Fragment>
    ));
    return (
      <Fragment>
        <List>
          {site}
        </List>
        <AddCircleOutlineOutlinedIcon onClick={this.openDialog} />
        <Dialog open={this.state.open} onEnter={console.log('Hey.')} onClose={this.closeDialog}>
          <DialogTitle>ADD Sites</DialogTitle>
            <DialogContent>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  name="siteNumber"
                  type="number"
                  label="Site Number"
                  value={this.state.siteNumber}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  name="siteAddress"
                  type="text"
                  label="Site Address"
                  value={this.state.siteAddress}
                  onChange={this.handleChange}
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >Add Site</Button>
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
    const siteData = {
      site_no: this.state.siteNumber,
      site_address: this.state.siteAddress
    }
    firebase
      .firestore()
      .collection('sites')
      .add(siteData).then(res => {
        console.log(res);
        this.setState({open: false, siteNumber: '', siteAddress: ''});
      }).catch(err => {
        console.log(err);
      })
  } 
}

export default Sites;



