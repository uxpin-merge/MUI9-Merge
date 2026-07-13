import * as React from 'react';
import MuiFormLabel from '@mui/material/FormLabel';

export interface FormLabelProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** The color of the component. */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** If true, the label is displayed in a disabled state. */
  disabled?: boolean;
  /** If true, the label is displayed in an error state. */
  error?: boolean;
  /** If true, the label is displayed in a focused state. */
  focused?: boolean;
  /** If true, the label indicates that the input is required. */
  required?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/form-label/
 * @uxpindescription A label for a group of form controls, e.g. above a RadioGroup or FormGroup.
 */
export default function FormLabel(props: FormLabelProps) {
  return <MuiFormLabel {...props}>{props.children}</MuiFormLabel>;
}
