import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const navBar = () => {
    return(
        <AppBar color="primary" position="sticky">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Users
            </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default navBar;