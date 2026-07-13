import * as React from 'react';
import FormGroup from '../FormGroup';
import FormControlLabel from '../../FormControlLabel/FormControlLabel';
import Checkbox from '../../Checkbox/Checkbox';

export default (
  <FormGroup uxpId="form-group-1">
    <FormControlLabel
      uxpId="form-control-label-1"
      control={<Checkbox uxpId="checkbox-1" value="gilad" />}
      label="Gilad Gray"
    />
    <FormControlLabel
      uxpId="form-control-label-2"
      control={<Checkbox uxpId="checkbox-2" value="jason" />}
      label="Jason Killian"
    />
    <FormControlLabel
      uxpId="form-control-label-3"
      control={<Checkbox uxpId="checkbox-3" value="antoine" />}
      label="Antoine Llorca"
    />
  </FormGroup>
);
