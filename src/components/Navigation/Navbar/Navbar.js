import React from 'react';
import {AppBar, Toolbar, Typography, withStyles,  Button} from '@material-ui/core';

const styles = {
  appBar: {
    background: '#054e45e6',
  },
  appTitle: {
    display: 'inline-block',
    position: 'absolute',
    padding: '16px',
    left: '0',
    fontSize: '20px'
  },
  signOutBtn: {
    display: 'inline-block',
    position: 'absolute',
    right: '0',
    color: 'white'
  }
}

const navbar = (props) => {

  const { classes, user, signOut } = props;
    return(
        <AppBar className={classes.appBar}  position="fixed">
          <Toolbar>
            <Typography  variant="inherit" color="inherit" className={classes.appTitle}>
              FORMS<span role="img" aria-label="memo">📝</span>
            </Typography>
            {user ? <Button variant="text" onClick={signOut} className={classes.signOutBtn}>Sign out</Button> : null}
          </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(navbar);