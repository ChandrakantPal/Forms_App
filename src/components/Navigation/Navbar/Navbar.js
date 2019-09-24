import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const navbar = () => {
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

export default navbar;