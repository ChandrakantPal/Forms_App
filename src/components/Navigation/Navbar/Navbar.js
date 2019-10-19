import React from 'react';
import {AppBar, Toolbar, Typography, withStyles,  Button} from '@material-ui/core';

const styles = {
  appBar: {
    background: '#19A6A6',
  }
}

const navbar = (props) => {

  const { classes, user, signOut } = props;
    return(
        <AppBar className={classes.appBar}  position="fixed">
          <Toolbar>
            <Typography  variant="inherit" color="inherit">
              FORMS
            </Typography>
            {user ? <Button variant="outlined" onClick={signOut}>Sign out</Button> : null}
          </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(navbar);