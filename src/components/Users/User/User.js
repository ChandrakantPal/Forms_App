import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';


const user = (props) => {
  console.log(props);
  return (
     <ListItem alignItems="flex-start" onClick={props.clicked}>
        <ListItemAvatar>
          <Avatar alt={props.name}></Avatar>
        </ListItemAvatar>
        <ListItemText primary={
            <Typography variant="h5">{props.name}</Typography>}
            secondary={props.mail}>
        </ListItemText>
      </ListItem>
      );
}


export default user;