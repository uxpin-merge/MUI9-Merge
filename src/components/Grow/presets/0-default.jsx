import * as React from 'react';
import Grow from '../Grow';
import Typography from '../../Typography/Typography';

export default (
  <Grow uxpId="grow-1" in>
    <Typography
      uxpId="typography-1"
      align="center"
      sx={{ bgcolor: 'grey.100', padding: '50px' }}
    >
      Grow Me!
    </Typography>
  </Grow>
);
