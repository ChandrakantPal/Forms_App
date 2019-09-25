import React from 'react';
import {Paper, Typography, Avatar, Grid} from '@material-ui/core';


const user = (props) => (
    <div>
        <Paper elevation={5} style={{margin: '20px 8px' , padding: '10px'}} onClick={props.clicked}>
            <Grid container >
                <Grid item >
                    <Avatar>AB</Avatar>
                </Grid>
                <Grid item >
                    <Typography variant="h5" style={{margin: '8px'}}>
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography >
                            {props.mail}      
                    </Typography>
                </Grid>
            </Grid> 
        </Paper>    
    </div>
);


export default user;