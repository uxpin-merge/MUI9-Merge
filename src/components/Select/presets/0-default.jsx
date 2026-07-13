import * as React from 'react';
import Select from '../Select';
import MenuItem from '../../MenuItem/MenuItem';

export default (
  <Select uxpId="select-1" value="select">
    <MenuItem uxpId="menu-item-1" value="select">
      Select:
    </MenuItem>
    <MenuItem uxpId="menu-item-2" value="developer">
      Software Developer
    </MenuItem>
    <MenuItem uxpId="menu-item-3" value="designer">
      Designer
    </MenuItem>
    <MenuItem uxpId="menu-item-4" value="other">
      Other
    </MenuItem>
  </Select>
);
