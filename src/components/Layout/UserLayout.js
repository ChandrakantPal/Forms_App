import React, { Component, Fragment } from 'react';
import Navbar from '../Navigation/Navbar/Navbar';

class Layout extends Component {
    render () {
        return(
            <Fragment >
                <Navbar {...this.props} />
                <main style={{marginTop: '64px', marginBottom: '56px'}}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;