import * as React from 'react';
import AppBar from '../AppBar';
import Toolbar from '../../Toolbar/Toolbar';
import Stack from '../../Stack/Stack';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';

export default (
  <AppBar uxpId="app-bar-1" position="static">
    <Toolbar uxpId="app-bar-toolbar-1">
      <Stack
        uxpId="app-bar-stack-1"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        <IconButton uxpId="app-bar-icon-button-1" color="inherit">
          <Icon uxpId="app-bar-icon-1">menu</Icon>
        </IconButton>
        <Typography uxpId="app-bar-typography-1" variant="h6" color="inherit">
          News
        </Typography>
        <Button uxpId="app-bar-button-1" color="inherit">
          Login
        </Button>
      </Stack>
    </Toolbar>
  </AppBar>
);
