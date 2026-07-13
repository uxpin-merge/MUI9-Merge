import * as React from 'react';
import MuiTextField from '@mui/material/TextField';

export interface TextFieldProps {
  /** The label content. */
  label?: string;
  /** The variant to use. */
  variant?: 'filled' | 'outlined' | 'standard';
  /** The color of the component. */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the component. */
  size?: 'small' | 'medium';
  /** Type of the input element. It should be a valid HTML5 input type. */
  type?: 'text' | 'password' | 'email' | 'number' | 'date';
  /** The short hint displayed in the input before the user enters a value. */
  placeholder?: string;
  /** The helper text content. */
  helperText?: string;
  /**
   * The value of the input element, required for a controlled component.
   * @uxpinbind onChange 0.target.value
   */
  value?: string;
  /** The default value. Use when the component is not controlled. */
  defaultValue?: string;
  /** If true, the label is displayed in an error state. */
  error?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the label is displayed as required and the input element is required. */
  required?: boolean;
  /** If true, the input takes up the full width of its container. */
  fullWidth?: boolean;
  /** If true, a textarea element is rendered instead of an input. */
  multiline?: boolean;
  /** Number of rows to display when multiline option is set to true. */
  rows?: number;
  /** Maximum number of rows to display when multiline option is set to true. */
  maxRows?: number;
  /** If dense or normal, adjusts vertical spacing of this and contained components. */
  margin?: 'dense' | 'none' | 'normal';
  /** If true, the input element is focused during the first mount. */
  autoFocus?: boolean;
  /** The id of the input element. Useful as anchor for positioned elements. */
  id?: string;
  /** Callback fired when the value is changed. Pull the new value from event.target.value. */
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Callback fired when the input loses focus. */
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-text-field/
 * @uxpindescription Text Fields let users enter and edit text.
 */
export default function TextField(props: TextFieldProps) {
  return <MuiTextField {...props} />;
}
