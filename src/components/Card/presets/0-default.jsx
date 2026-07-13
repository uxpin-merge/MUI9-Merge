import * as React from 'react';
import Card from '../Card';
import CardHeader from '../../CardHeader/CardHeader';
import CardMedia from '../../CardMedia/CardMedia';
import CardContent from '../../CardContent/CardContent';
import CardActionArea from '../../CardActionArea/CardActionArea';
import CardActions from '../../CardActions/CardActions';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <Card uxpId="card-1">
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
    <CardMedia
      uxpId="card-media-1"
      component="img"
      height={140}
      image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="Cool art"
    />
    <CardContent uxpId="card-content-1">
      <Typography uxpId="card-content-typography-1" gutterBottom variant="h4" component="div">
        Trends
      </Typography>
      <Typography uxpId="card-content-typography-2" variant="body2" color="text.secondary">
        Learn about the recent top design trends and get inspired. See what you can experiment with in your future
        designs.
      </Typography>
    </CardContent>
    <CardActionArea uxpId="card-action-area-1">
      <CardActions uxpId="card-actions-1">
        <Button uxpId="card-actions-button-1" size="small" color="primary" variant="outlined">
          Share
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>
);
