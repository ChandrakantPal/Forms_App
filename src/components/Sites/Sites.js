import React, { Component, Fragment } from 'react';
import Site from './Site/Site';
import { List, Divider } from '@material-ui/core';
import firebase from '../../Firebase';

class Sites extends Component {
    state = {
        sites: [] 
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
          this.props.history.push("/site/" + id);
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
            <List>
                {site}
            </List>
        );
    }
}

export default Sites;