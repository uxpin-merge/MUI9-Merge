import * as React from 'react';
import MuiDialogActions from '@mui/material/DialogActions';

export interface DialogActionsProps {
  /** The content of the component, normally Button components. */
  children?: React.ReactNode;
  /** If true, the dialog actions do not have additional margin. */
  disableSpacing?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/dialog-actions/
 * @uxpindescription The action buttons area at the bottom of a Dialog.
 */
export default function DialogActions(props: DialogActionsProps) {
  return <MuiDialogActions {...props}>{props.children}</MuiDialogActions>;
}
