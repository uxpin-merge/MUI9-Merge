import * as React from 'react';
import MuiRadio from '@mui/material/Radio';

export interface RadioProps {
  /**
   * If true, the component is checked.
   * @uxpinbind onChange 1
   */
  checked?: boolean;
  /** The color of the component. */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the component. small is equivalent to the dense radio styling. */
  size?: 'small' | 'medium';
  /** The value of the component (used by RadioGroup to identify the selected radio). */
  value?: string;
  /** Name attribute of the input element. */
  name?: string;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the ripple effect is disabled. */
  disableRipple?: boolean;
  /** If true, the input element is required. */
  required?: boolean;
  /** The id of the input element. */
  id?: string;
  /** Callback fired when the state is changed. The second argument is the new checked state. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-radio-button/
 * @uxpindescription Radio buttons allow the user to select one option from a set. Use inside a RadioGroup, usually wrapped in a FormControlLabel.
 */
export default function Radio(props: RadioProps) {
  return <MuiRadio {...props} />;
}
