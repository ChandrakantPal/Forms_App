import React, { Component } from 'react';

import {withStyles, Grid, Typography, TextField, Button, Divider} from '@material-ui/core';


const styles = {
    form: {
        textAlign: 'center'
    },
    pageTitle: {
        margin: '20px auto'
    },
    textField: {
        margin: '20px',
        boxSizing: 'border-box'
    },
    button: {
        margin: '20px auto'
    },
    divider: {
        background: '#2A2A28'
    },
    googleBtn: {
        margin: '40px auto'
    }
       
}

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
        errors: {}
    }

    signInHandler = (e) => {
        e.preventDefault();
        console.log('hi');
        
    }

    changeHandler = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }

    render () {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form} >
                <Grid item sm />
                <Grid item sm >
                    <Typography variant="h2" className={classes.pageTitle} >
                        SignIn
                    </Typography>
                    <form noValidate onSubmit={this.signInHandler}>
                        <TextField 
                            id="email" 
                            name="email" 
                            type="email" 
                            label="Email" 
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.changeHandler}
                            fullWidth />
                        <TextField 
                            id="password" 
                            name="password" 
                            type="password" 
                            label="Password" 
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.changeHandler}
                            fullWidth />
                        <Button type="submit" variant="outlined" colour="primary" className={classes.button}>SignIn</Button>
                    </form>
                    <Divider variant="fullWidth" component="hr" className={classes.divider} />
                    <Button variant="outlined" colour="primary" className={classes.googleBtn}>Sign In With Google</Button>
                </Grid>
                <Grid item sm />
            </Grid>
        );
    }
}

export default withStyles(styles)(SignIn);