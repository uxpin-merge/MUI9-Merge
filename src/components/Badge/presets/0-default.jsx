import * as React from 'react';
import Badge from '../Badge';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <Badge
    uxpId="badge-1"
    badgeContent="3"
    color="primary"
    overlap="circular"
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <IconButton uxpId="badge-icon-button-1">
      <Icon uxpId="badge-icon-1">notifications</Icon>
    </IconButton>
  </Badge>
);
