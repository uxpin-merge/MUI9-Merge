import * as React from 'react';
import Slide from '../Slide';
import Typography from '../../Typography/Typography';

export default (
  <Slide uxpId="slide-1" in direction="right">
    <Typography
      uxpId="typography-1"
      align="center"
      sx={{ bgcolor: 'grey.100', padding: '50px' }}
    >
      Slide Me!
    </Typography>
  </Slide>
);
