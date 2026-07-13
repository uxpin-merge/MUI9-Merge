import * as React from 'react';
import MuiDialogContent from '@mui/material/DialogContent';

export interface DialogContentProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** Display the top and bottom dividers. */
  dividers?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/dialog-content/
 * @uxpindescription The scrollable content area of a Dialog.
 */
export default function DialogContent(props: DialogContentProps) {
  return <MuiDialogContent {...props}>{props.children}</MuiDialogContent>;
}
