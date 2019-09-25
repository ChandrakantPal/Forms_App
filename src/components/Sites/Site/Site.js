import React from 'react';
import {Paper, Typography, Avatar, Grid} from '@material-ui/core';
// import { Link } from 'react-router-dom';

const site = (props) => (
    <div>
        <Paper elevation={5} style={{margin: '20px 8px' , padding: '10px'}} onClick={props.clicked}>
            <Grid container >
                <Grid item >
                    <Avatar>{}</Avatar>
                </Grid>
                <Grid item >
                    <Typography variant="h5" style={{margin: '8px'}}>
                        {props.siteNumber}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography >
                        {props.address}      
                    </Typography>
                </Grid>
            </Grid> 
        </Paper>  
    </div>
);

export default site;