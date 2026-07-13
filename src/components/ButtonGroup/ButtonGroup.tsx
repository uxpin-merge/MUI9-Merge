import * as React from 'react';
import MuiButtonGroup from '@mui/material/ButtonGroup';

export interface ButtonGroupProps {
  /** The buttons in the group (use Button components). */
  children?: React.ReactNode;
  /** The color of the button group. */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** The variant to use. */
  variant?: 'text' | 'outlined' | 'contained';
  /** The size of the components. */
  size?: 'small' | 'medium' | 'large';
  /** The group orientation. */
  orientation?: 'horizontal' | 'vertical';
  /** If true, all buttons are disabled. */
  disabled?: boolean;
  /** If true, no elevation is used. */
  disableElevation?: boolean;
  /** If true, the buttons take the full width of the container. */
  fullWidth?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-button-group/
 * @uxpindescription Groups related buttons together.
 */
export default function ButtonGroup(props: ButtonGroupProps) {
  return <MuiButtonGroup {...props}>{props.children}</MuiButtonGroup>;
}
