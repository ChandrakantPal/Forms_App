import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const navbar = () => {
    return(
        <AppBar color="primary" position="fixed">
          <Toolbar>
            <Typography variant="inherit" color="inherit">
              FORMS
            </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default navbar;