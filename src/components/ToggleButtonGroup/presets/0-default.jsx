import * as React from 'react';
import ToggleButtonGroup from '../ToggleButtonGroup';
import ToggleButton from '../../ToggleButton/ToggleButton';
import Icon from '../../Icon/Icon';

export default (
  <ToggleButtonGroup uxpId="toggle-button-group-1" exclusive>
    <ToggleButton uxpId="toggle-button-1" value="home">
      <Icon uxpId="toggle-button-icon-1">home</Icon>
    </ToggleButton>
    <ToggleButton uxpId="toggle-button-2" value="star">
      <Icon uxpId="toggle-button-icon-2">star</Icon>
    </ToggleButton>
    <ToggleButton uxpId="toggle-button-3" value="navigation">
      <Icon uxpId="toggle-button-icon-3">navigation</Icon>
    </ToggleButton>
  </ToggleButtonGroup>
);
