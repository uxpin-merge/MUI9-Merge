import * as React from 'react';
import List from '../List';
import ListSubheader from '../../ListSubheader/ListSubheader';
import ListItem from '../../ListItem/ListItem';
import ListItemButton from '../../ListItemButton/ListItemButton';
import ListItemAvatar from '../../ListItemAvatar/ListItemAvatar';
import ListItemIcon from '../../ListItemIcon/ListItemIcon';
import ListItemText from '../../ListItemText/ListItemText';
import Avatar from '../../Avatar/Avatar';
import Icon from '../../Icon/Icon';

export default (
  <List uxpId="list-1">
    <ListSubheader uxpId="list-subheader-1">List Subheader</ListSubheader>
    <ListItem uxpId="list-item-1">
      <ListItemButton uxpId="list-item-button-1">
        <ListItemAvatar uxpId="list-item-avatar-1">
          <Avatar uxpId="avatar-1">
            <Icon uxpId="icon-1">people</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText uxpId="list-item-text-1" primary="List Item 1" secondary="Secondary text" />
      </ListItemButton>
    </ListItem>
    <ListItem uxpId="list-item-2">
      <ListItemButton uxpId="list-item-button-2">
        <ListItemIcon uxpId="list-item-icon-1">
          <Icon uxpId="icon-2">inbox</Icon>
        </ListItemIcon>
        <ListItemText uxpId="list-item-text-2" primary="List Item 2" secondary="Secondary Text" />
      </ListItemButton>
    </ListItem>
  </List>
);
