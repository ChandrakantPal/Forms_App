import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import {withStyles, div, Typography, Button} from '@material-ui/core';


const styles = {
    signInContainer: {
        textAlign: 'center',
        padding: 'auto'
    },
    pageTitle: {
        marginTop: '100px'
    },
    googleBtn: {
        margin: '40px auto',
    },
    logo: {
        marginRight: '10px',
    }
       
}

class SignIn extends Component { 
    render () {
        const { classes} = this.props;
        return (
            <div className={classes.signInContainer} >
                    <Typography className={classes.pageTitle} variant="h5">Welcome to Forms App</Typography>
                    <Button 
                        size="large"
                        variant="outlined" 
                        colour="primary" 
                        className={classes.googleBtn} 
                        onClick={this.props.auth}>
                           <img className={classes.logo} alt="logo" src={logo} /> Sign in with Google
                    </Button>
            </div>
        );
    }
}

export default withStyles(styles)(SignIn);