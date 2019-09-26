import React from 'react';
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';


const user = (props) => (
    <div>
    <List onClick={props.clicked}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.name}></Avatar>
        </ListItemAvatar>
        <ListItemText primary={
            <Typography variant="h5">{props.name}</Typography>}
            secondary={props.mail}>
        </ListItemText>
      </ListItem>
        <Divider variant="inset" component="li" />
    </List>
    </div>
);


export default user;