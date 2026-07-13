import * as React from 'react';
import CardActionArea from '../CardActionArea';
import CardContent from '../../CardContent/CardContent';
import Typography from '../../Typography/Typography';

export default (
  <CardActionArea uxpId="card-action-area-1">
    <CardContent uxpId="card-action-area-content-1">
      <Typography uxpId="card-action-area-typography-1" gutterBottom variant="h4" component="div">
        Trends
      </Typography>
      <Typography uxpId="card-action-area-typography-2" variant="body2" color="text.secondary">
        Learn about the recent top design trends and get inspired. See what you can experiment with in your future
        designs.
      </Typography>
    </CardContent>
  </CardActionArea>
);
