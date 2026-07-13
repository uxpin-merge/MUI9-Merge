import * as React from 'react';
import MuiInputLabel from '@mui/material/InputLabel';

export interface InputLabelProps {
  /** The contents of the InputLabel. */
  children?: React.ReactNode;
  /** The color of the component. */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The variant to use. */
  variant?: 'filled' | 'outlined' | 'standard';
  /** If true, the transition animation is disabled. */
  disableAnimation?: boolean;
  /** If true, the label is displayed in a disabled state. */
  disabled?: boolean;
  /** If true, the label is displayed in an error state. */
  error?: boolean;
  /** If true, the label is displayed in a focused state. */
  focused?: boolean;
  /** If true, the label indicates that the input is required. */
  required?: boolean;
  /** If true, the label is shrunk. */
  shrink?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/input-label/
 * @uxpindescription A label for an input, usually paired with a Select or Input inside a FormControl.
 */
export default function InputLabel(props: InputLabelProps) {
  return <MuiInputLabel {...props}>{props.children}</MuiInputLabel>;
}
