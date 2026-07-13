import * as React from 'react';
import Toolbar from '../Toolbar';
import Stack from '../../Stack/Stack';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';

export default (
  <Toolbar uxpId="toolbar-1">
    <Stack
      uxpId="toolbar-stack-1"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <IconButton uxpId="toolbar-icon-button-1" color="inherit">
        <Icon uxpId="toolbar-icon-1">menu</Icon>
      </IconButton>
      <Typography uxpId="toolbar-typography-1" variant="h6" color="inherit">
        News
      </Typography>
      <Button uxpId="toolbar-button-1" color="inherit">
        Login
      </Button>
    </Stack>
  </Toolbar>
);
