import React, { Component, Fragment } from 'react';
import Site from './Site/Site';
import { List, Divider } from '@material-ui/core'

class Sites extends Component {
    state = {
        sites: [{id: 'sfgysv', site: '1001', address: 'address1', contact: '12345', mail: 'user@user.com' },
                  {id: 'gewygu', site: '1002', address: 'address2', contact: '67890', mail: 'user@user.com' },
                  {id: 'ghfgug', site: '1003', address: 'address3', contact: '09876', mail: 'user@user.com' },
                  {id: '1ghfgug', site: '1003', address: 'address4', contact: '09876', mail: 'user@user.com' }, 
                  {id: '2ghfgug', site: '1003', address: 'address5', contact: '09876', mail: 'user@user.com' },
                  {id: '3ghfgug', site: '1003', address: 'address5', contact: '09876', mail: 'user@user.com' }, 
                  {id: '4ghfgug', site: '1003', address: 'address5', contact: '09876', mail: 'user@user.com' }, 
                  {id: '5ghfgug', site: '1003', address: 'address6', contact: '09876', mail: 'user@user.com' },
                  {id: '6ghfgug', site: '1003', address: 'address6', contact: '09876', mail: 'user@user.com' }] 
      }

      siteClickHandler = () => {
          this.props.history.push("/siteP");
      }

    render () {
            const site = this.state.sites.map(site => (
                <Fragment key={site.id}>
                    <Site 
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