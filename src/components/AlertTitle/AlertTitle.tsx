import * as React from 'react';
import MuiAlertTitle from '@mui/material/AlertTitle';

export interface AlertTitleProps {
  /**
   * The content of the component.
   * @uxpinpropname Text
   */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/alert-title/
 * @uxpindescription A formatted title for an Alert.
 */
export default function AlertTitle(props: AlertTitleProps) {
  return <MuiAlertTitle {...props}>{props.children}</MuiAlertTitle>;
}
