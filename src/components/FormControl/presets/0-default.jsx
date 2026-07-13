import * as React from 'react';
import FormControl from '../FormControl';
import InputLabel from '../../InputLabel/InputLabel';
import Select from '../../Select/Select';
import MenuItem from '../../MenuItem/MenuItem';
import FormHelperText from '../../FormHelperText/FormHelperText';

export default (
  <FormControl uxpId="form-control-1" fullWidth>
    <InputLabel uxpId="input-label-1">Age</InputLabel>
    <Select uxpId="select-1" label="Age">
      <MenuItem uxpId="menu-item-1" value="">
        None
      </MenuItem>
      <MenuItem uxpId="menu-item-2" value="10">
        Ten
      </MenuItem>
      <MenuItem uxpId="menu-item-3" value="20">
        Twenty
      </MenuItem>
      <MenuItem uxpId="menu-item-4" value="30">
        Thirty
      </MenuItem>
    </Select>
    <FormHelperText uxpId="form-helper-text-1">Some important helper text</FormHelperText>
  </FormControl>
);
