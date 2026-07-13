import * as React from 'react';
import Collapse from '../Collapse';
import Typography from '../../Typography/Typography';

export default (
  <Collapse uxpId="collapse-1" in>
    <Typography
      uxpId="typography-1"
      align="center"
      sx={{ bgcolor: 'grey.100', padding: '50px' }}
    >
      Collapse Me!
    </Typography>
  </Collapse>
);
