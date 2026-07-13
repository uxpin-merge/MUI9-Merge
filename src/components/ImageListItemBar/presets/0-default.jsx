import * as React from 'react';
import ImageListItemBar from '../ImageListItemBar';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <ImageListItemBar
    uxpId="image-list-item-bar-1"
    title="Trends"
    position="top"
    actionIcon={
      <IconButton uxpId="image-list-item-bar-icon-button-1" color="inherit">
        <Icon uxpId="image-list-item-bar-icon-1" fontSize="inherit">
          star_border
        </Icon>
      </IconButton>
    }
  />
);
