import * as React from 'react';
import Alert from '../Alert';
import AlertTitle from '../../AlertTitle/AlertTitle';
import Typography from '../../Typography/Typography';

export default (
  <Alert uxpId="alert-1" severity="info">
    <AlertTitle uxpId="alert-title-1">Info</AlertTitle>
    <Typography variant="body2" uxpId="alert-typography-1">
      This is an info alert - check it out!
    </Typography>
  </Alert>
);
