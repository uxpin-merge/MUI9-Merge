import * as React from 'react';
import ImageListItem from '../ImageListItem';
import ImageListItemBar from '../../ImageListItemBar/ImageListItemBar';
import CardMedia from '../../CardMedia/CardMedia';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <ImageListItem uxpId="image-list-item-1" cols={1}>
    <CardMedia
      uxpId="image-list-item-image-1"
      component="img"
      image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="Trends"
      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <ImageListItemBar
      uxpId="image-list-item-bar-1"
      title="Trends"
      actionIcon={
        <IconButton uxpId="image-list-item-bar-icon-button-1" color="inherit">
          <Icon uxpId="image-list-item-bar-icon-1" fontSize="inherit">
            star_border
          </Icon>
        </IconButton>
      }
    />
  </ImageListItem>
);
