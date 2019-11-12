import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

const site = (props) => {
    console.log(props);
    
    return (
        <ListItem alignItems="flex-start" onClick={props.clicked}>
            <ListItemAvatar>
                <Avatar alt={props.siteNumber}><span role="img" aria-label="site">🏢</span></Avatar>
            </ListItemAvatar>
            <ListItemText primary={
                <Typography variant="h5">{props.siteNumber}</Typography>}
                    secondary={props.address}>
            </ListItemText>
        </ListItem>
    );
}

export default site;