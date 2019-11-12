import React from 'react';
import {AppBar, Toolbar, Typography, withStyles,  Button} from '@material-ui/core';

const styles = {
  appBar: {
    background: '#19A6A6',
  },
  appTitle: {
    display: 'inline-block',
    position: 'absolute',
    left: '45%',
    fontSize: '24px'
  },
  signOutBtn: {
    display: 'inline-block',
    position: 'absolute',
    left: '90%'
  }
}

const navbar = (props) => {

  const { classes, user, signOut } = props;
    return(
        <AppBar className={classes.appBar}  position="fixed">
          <Toolbar>
            <Typography  variant="inherit" color="inherit" className={classes.appTitle}>
              FORMS
            </Typography>
            {user ? <Button variant="outlined" onClick={signOut} className={classes.signOutBtn}>Sign out</Button> : null}
          </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(navbar);