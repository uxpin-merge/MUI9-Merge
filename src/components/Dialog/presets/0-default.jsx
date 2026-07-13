import * as React from 'react';
import Dialog from '../Dialog';
import DialogTitle from '../../DialogTitle/DialogTitle';
import DialogContent from '../../DialogContent/DialogContent';
import DialogContentText from '../../DialogContentText/DialogContentText';
import DialogActions from '../../DialogActions/DialogActions';
import Button from '../../Button/Button';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';
import Stack from '../../Stack/Stack';

export default (
  <Dialog uxpId="dialog-1" open>
    <Stack direction="row" alignItems="center" justifyContent="space-between" uxpId="dialog-stack-1">
      <DialogTitle uxpId="dialog-title-1">{"Use Google's location service?"}</DialogTitle>
      <IconButton uxpId="dialog-icon-button-1" sx={{ marginRight: '16px' }}>
        <Icon uxpId="dialog-icon-1">close</Icon>
      </IconButton>
    </Stack>
    <DialogContent uxpId="dialog-content-1">
      <DialogContentText uxpId="dialog-content-text-1">
        Let Google help apps determine location. This means sending anonymous location data to
        Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions uxpId="dialog-actions-1">
      <Button uxpId="dialog-button-1">Disagree</Button>
      <Button uxpId="dialog-button-2">Agree</Button>
    </DialogActions>
  </Dialog>
);
