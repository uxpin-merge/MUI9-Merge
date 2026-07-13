import * as React from 'react';
import Tooltip from '../Tooltip';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <Tooltip uxpId="tooltip-1" title="Title Here">
    <IconButton uxpId="tooltip-icon-button-1">
      <Icon uxpId="tooltip-icon-1">notifications</Icon>
    </IconButton>
  </Tooltip>
);
