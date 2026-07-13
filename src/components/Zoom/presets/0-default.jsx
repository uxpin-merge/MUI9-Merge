import * as React from 'react';
import Zoom from '../Zoom';
import Typography from '../../Typography/Typography';

export default (
  <Zoom uxpId="zoom-1" in>
    <Typography
      uxpId="typography-1"
      align="center"
      sx={{ bgcolor: 'grey.100', padding: '50px' }}
    >
      Zoom Me!
    </Typography>
  </Zoom>
);
