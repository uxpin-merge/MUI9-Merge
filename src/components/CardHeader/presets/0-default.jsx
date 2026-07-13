import * as React from 'react';
import CardHeader from '../CardHeader';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <CardHeader
    uxpId="card-header-1"
    action={
      <IconButton uxpId="card-header-action-icon-button-1">
        <Icon uxpId="card-header-action-icon-1">more_vert</Icon>
      </IconButton>
    }
    title="Design Insights"
    subheader="December 6, 2021"
  />
);
