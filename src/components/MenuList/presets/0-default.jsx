import * as React from 'react';
import MenuList from '../MenuList';
import Paper from '../../Paper/Paper';
import MenuItem from '../../MenuItem/MenuItem';

export default (
  <Paper uxpId="menu-list-paper-1">
    <MenuList uxpId="menu-list-1">
      <MenuItem uxpId="menu-list-item-1">Profile</MenuItem>
      <MenuItem uxpId="menu-list-item-2">My account</MenuItem>
      <MenuItem uxpId="menu-list-item-3">Logout</MenuItem>
    </MenuList>
  </Paper>
);
