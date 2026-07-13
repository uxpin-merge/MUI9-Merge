import * as React from 'react';
import Drawer from '../Drawer';
import Box from '../../Box/Box';

export default (
  <Drawer uxpId="drawer-1" sx={{ width: '100%', height: '100%' }} anchor="left" open={true} variant="persistent">
    <Box uxpId="drawer-content-1">Drawer Contents</Box>
  </Drawer>
);
