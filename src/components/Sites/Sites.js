import React, { Component, Fragment } from 'react';
import Site from './Site/Site';
import { List, Divider } from '@material-ui/core'

class Sites extends Component {
    state = {
        sites: [{id: 'sfgysv', site: '1001', address: 'address1', contact: '12345', mail: 'user@user.com' },
                  {id: 'gewygu', site: '1002', address: 'address2', contact: '67890', mail: 'user@user.com' },
                  {id: 'ghfgug', site: '1003', address: 'address3', contact: '09876', mail: 'user@user.com' }] 
      }

      siteClickHandler = () => {
          this.props.history.push("/siteP");
      }

    render () {
            const site = this.state.sites.map(site => (
                <Fragment>
                    <Site 
                        key={site.id} 
                        siteNumber={site.site} 
                        address={site.address} 
                        contact={site.contact} 
                        clicked={this.siteClickHandler}/>
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