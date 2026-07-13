import * as React from 'react';
import MuiSnackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

export interface SnackbarProps {
  /** If true, the component is shown. */
  open?: boolean;
  /** The message to display. */
  message?: string;
  /** The number of milliseconds to wait before automatically calling the onClose function. Disabled by default (null). */
  autoHideDuration?: number;
  /** The anchor of the Snackbar. On smaller screens, the component grows to occupy all the available width. */
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  /** Callback fired when the component requests to be closed. */
  onClose?: (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => void;
  /** The action to display. It renders after the message, at the end of the snackbar. */
  action?: React.ReactNode;
  /** The content of the component (replaces the default SnackbarContent, e.g. an Alert). */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-snackbar/
 * @uxpindescription Snackbars provide brief notifications. The component is also known as a toast.
 * @uxpinuseportal
 */
export default function Snackbar(props: SnackbarProps) {
  const { open = false, onClose, children, ...other } = props;
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]); // Only re-run the effect if open prop changes

  const handleClose = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      // prevents from closing in the UXPin Editor when switching props
      return;
    }
    setIsOpen(false);
    onClose?.(event, reason);
  };

  return (
    <MuiSnackbar {...other} open={isOpen} onClose={handleClose}>
      {children ? <div>{children}</div> : undefined}
    </MuiSnackbar>
  );
}
