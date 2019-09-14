import React from 'react';
import {Paper, Typography, Avatar} from '@material-ui/core';

const users = (props) => {
    return (
        <div>
        <Paper elevation="5" style={{margin: '20px 8px' , padding: '10px'}}>
        <Avatar>AB</Avatar>
        <Typography variant="h5">
          {props.title}
        </Typography>
        <Typography >
          {props.mail}
        </Typography>
      </Paper>
        </div>
    );
}

export default users;