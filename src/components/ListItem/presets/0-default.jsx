import * as React from 'react';
import ListItem from '../ListItem';
import ListItemButton from '../../ListItemButton/ListItemButton';
import ListItemIcon from '../../ListItemIcon/ListItemIcon';
import ListItemText from '../../ListItemText/ListItemText';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <ListItem
    uxpId="list-item-1"
    disablePadding
    secondaryAction={
      <IconButton uxpId="list-item-secondary-icon-button-1">
        <Icon uxpId="list-item-secondary-icon-1">more_vert</Icon>
      </IconButton>
    }
  >
    <ListItemButton uxpId="list-item-button-1">
      <ListItemIcon uxpId="list-item-icon-1">
        <Icon uxpId="list-item-icon-icon-1">home</Icon>
      </ListItemIcon>
      <ListItemText uxpId="list-item-text-1" primary="Primary Text" secondary="Secondary Text" />
    </ListItemButton>
  </ListItem>
);
