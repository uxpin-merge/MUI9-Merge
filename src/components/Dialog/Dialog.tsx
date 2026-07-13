import * as React from 'react';
import MuiDialog from '@mui/material/Dialog';

export interface DialogProps {
  /** If true, the Dialog is open. */
  open?: boolean;
  /** The content of the Dialog. */
  children?: React.ReactNode;
  /** Callback fired when the component requests to be closed. */
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;
  /** If true, the dialog stretches to maxWidth. */
  fullWidth?: boolean;
  /** Determine the max width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth. */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  /** If true, the dialog is full-screen. */
  fullScreen?: boolean;
  /** Determine the container for scrolling the dialog. */
  scroll?: 'body' | 'paper';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-dialog/
 * @uxpindescription Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 * @uxpinuseportal
 */
export default function Dialog(props: DialogProps) {
  const { open = false, onClose, children, ...other } = props;
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]); // Only re-run the effect if open prop changes

  const handleClose = (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
    setIsOpen(false);
    onClose?.(event, reason);
  };

  return (
    <MuiDialog {...other} open={isOpen} onClose={handleClose}>
      {children}
    </MuiDialog>
  );
}
