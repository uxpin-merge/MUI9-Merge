import * as React from 'react';
import Fade from '../Fade';
import Typography from '../../Typography/Typography';

export default (
  <Fade uxpId="fade-1" in>
    <Typography
      uxpId="typography-1"
      align="center"
      sx={{ bgcolor: 'grey.100', padding: '50px' }}
    >
      Fade Me!
    </Typography>
  </Fade>
);
