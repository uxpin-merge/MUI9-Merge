import * as React from 'react';
import FormControlLabel from '../FormControlLabel';
import Checkbox from '../../Checkbox/Checkbox';

export default (
  <FormControlLabel
    uxpId="form-control-label-1"
    control={<Checkbox uxpId="checkbox-1" value="gilad" />}
    label="I'm a label"
    sx={{ color: 'text.secondary' }}
  />
);
