import * as React from 'react';
import MuiDialogTitle from '@mui/material/DialogTitle';

export interface DialogTitleProps {
  /** The text of the Dialog Title. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/dialog-title/
 * @uxpindescription The title of a Dialog.
 */
export default function DialogTitle(props: DialogTitleProps) {
  return <MuiDialogTitle {...props}>{props.children}</MuiDialogTitle>;
}
