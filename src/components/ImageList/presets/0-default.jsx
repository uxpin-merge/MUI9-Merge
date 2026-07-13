import * as React from 'react';
import ImageList from '../ImageList';
import ImageListItem from '../../ImageListItem/ImageListItem';
import ImageListItemBar from '../../ImageListItemBar/ImageListItemBar';
import CardMedia from '../../CardMedia/CardMedia';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <ImageList uxpId="image-list-1" rowHeight={160} cols={3}>
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
    <ImageListItem uxpId="image-list-item-2" cols={2}>
      <CardMedia
        uxpId="image-list-item-image-2"
        component="img"
        image="https://images.unsplash.com/photo-1608501947097-86951ad73fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Insights"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <ImageListItemBar
        uxpId="image-list-item-bar-2"
        title="Insights"
        actionIcon={
          <IconButton uxpId="image-list-item-bar-icon-button-2" color="inherit">
            <Icon uxpId="image-list-item-bar-icon-2" fontSize="inherit">
              star_border
            </Icon>
          </IconButton>
        }
      />
    </ImageListItem>
    <ImageListItem uxpId="image-list-item-3" cols={3}>
      <CardMedia
        uxpId="image-list-item-image-3"
        component="img"
        image="https://images.unsplash.com/photo-1607893378714-007fd47c8719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Inspiration"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <ImageListItemBar
        uxpId="image-list-item-bar-3"
        title="Inspiration"
        actionIcon={
          <IconButton uxpId="image-list-item-bar-icon-button-3" color="inherit">
            <Icon uxpId="image-list-item-bar-icon-3" fontSize="inherit">
              star_border
            </Icon>
          </IconButton>
        }
      />
    </ImageListItem>
  </ImageList>
);
