import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  activeRouter: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

export default function SidebarLink({ name, path, icon }) {
  const classes = useStyles();
  return (
    <ListItem component={NavLink} to={path} activeClassName={classes.activeRouter}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )
}
