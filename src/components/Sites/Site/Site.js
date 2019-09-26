import React from 'react';
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

const site = (props) => (
    <div>
        <List onClick={props.clicked}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={props.siteNumber}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={
                <Typography variant="h5">{props.siteNumber}</Typography>}
                secondary={props.address}>
            </ListItemText>
        </ListItem>
        <Divider variant="inset" component="li" />
    </List>
    </div>
);

export default site;