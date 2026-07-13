import * as React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';

export interface CheckboxProps {
  /**
   * If true, the component is checked.
   * @uxpinbind onChange 1
   */
  checked?: boolean;
  /** The color of the component. */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the component. small is equivalent to the dense checkbox styling. */
  size?: 'small' | 'medium' | 'large';
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the component appears indeterminate. */
  indeterminate?: boolean;
  /** If true, the ripple effect is disabled. */
  disableRipple?: boolean;
  /** If true, the input element is required. */
  required?: boolean;
  /** The value of the component. */
  value?: string;
  /** The id of the input element. */
  id?: string;
  /** Callback fired when the state is changed. The second argument is the new checked state. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-checkbox/
 * @uxpindescription Checkboxes allow the user to select one or more items from a set. Combine with FormControlLabel to add a label.
 */
export default function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox {...props} />;
}
