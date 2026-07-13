import * as React from 'react';
import MuiDialogContentText from '@mui/material/DialogContentText';

export interface DialogContentTextProps {
  /** The Dialog Content Text. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/dialog-content-text/
 * @uxpindescription Text inside a DialogContent, styled for dialogs.
 */
export default function DialogContentText(props: DialogContentTextProps) {
  return <MuiDialogContentText {...props}>{props.children}</MuiDialogContentText>;
}
