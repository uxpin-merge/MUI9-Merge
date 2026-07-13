import * as React from 'react';
import MuiFormControl from '@mui/material/FormControl';

export interface FormControlProps {
  /** The content of the component: InputLabel, Select, FormHelperText, etc. */
  children?: React.ReactNode;
  /** The color of the component. */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The variant to use. */
  variant?: 'filled' | 'outlined' | 'standard';
  /** The size of the component. */
  size?: 'small' | 'medium';
  /** If dense or normal, adjusts vertical spacing of this and contained components. */
  margin?: 'dense' | 'none' | 'normal';
  /** If true, the component takes up the full width of its container. */
  fullWidth?: boolean;
  /** If true, the label, input and helper text are displayed in a disabled state. */
  disabled?: boolean;
  /** If true, the label is displayed in an error state. */
  error?: boolean;
  /** If true, the component is displayed in a focused state. */
  focused?: boolean;
  /** If true, the label indicates that the input is required. */
  required?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/form-control/
 * @uxpindescription Provides context such as filled/focused/error/required for form inputs. Wrap InputLabel, Select and FormHelperText together.
 */
export default function FormControl(props: FormControlProps) {
  return <MuiFormControl {...props}>{props.children}</MuiFormControl>;
}
