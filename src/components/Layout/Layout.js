import React, { Component, Fragment } from 'react';
import Navbar from '../Navigation/Navbar/Navbar';
import BottomNav from '../Navigation/BottomNav/BottomNav';

class Layout extends Component {
    render () {
        return(
            <Fragment >
                <header>
                    <Navbar {...this.props} />
                </header>
                <main style={{marginTop: '64px', marginBottom: '56px'}}>
                    {this.props.children}
                </main>
                <footer>
                    <BottomNav />
                </footer>
            </Fragment>
        );
    }
}

export default Layout;