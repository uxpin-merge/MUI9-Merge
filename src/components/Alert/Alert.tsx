import * as React from 'react';
import MuiAlert from '@mui/material/Alert';

export interface AlertProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** The severity of the alert. This defines the color and icon used. */
  severity?: 'success' | 'info' | 'warning' | 'error';
  /** The variant to use. */
  variant?: 'standard' | 'filled' | 'outlined';
  /** The main color for the alert. Unless provided, the value is taken from the severity prop. */
  color?: 'success' | 'info' | 'warning' | 'error';
  /** Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the severity prop. */
  icon?: React.ReactNode;
  /** Callback fired when the component requests to be closed. When provided and no action prop is set, a close icon button is displayed. */
  onClose?: (event: React.SyntheticEvent) => void;
  /** The action to display. It renders after the message, at the end of the Alert. */
  action?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-alert/
 * @uxpindescription An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
export default function Alert(props: AlertProps) {
  return <MuiAlert {...props}>{props.children}</MuiAlert>;
}
