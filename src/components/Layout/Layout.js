import React, { Component, Fragment } from 'react';
import Navbar from '../Navigation/Navbar/Navbar';
import BottomNav from '../Navigation/BottomNav/BottomNav';

class Layout extends Component {
    render () {
        return(
            <Fragment >
                <header>
                    <Navbar />
                </header>
                {this.props.children}
                <footer>
                    <BottomNav />
                </footer>
            </Fragment>
        );
    }
}

export default Layout;