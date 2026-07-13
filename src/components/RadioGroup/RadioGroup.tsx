import * as React from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';

export interface RadioGroupProps {
  /** The content of the component: usually FormControlLabel elements wrapping Radio controls. */
  children?: React.ReactNode;
  /** Display the group of elements in a compact row. */
  row?: boolean;
  /**
   * The value of the selected radio button.
   * @uxpinbind onChange 1
   */
  value?: string;
  /** The default value. Use when the component is not controlled. */
  defaultValue?: string;
  /** The name used to reference the value of the control. Falls back to a randomly generated name. */
  name?: string;
  /** Callback fired when a radio button is selected. The second argument is the value of the selected radio button. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-radio-button/
 * @uxpindescription The Radio Group allows the user to select one option from a set.
 */
export default function RadioGroup(props: RadioGroupProps) {
  return <MuiRadioGroup {...props}>{props.children}</MuiRadioGroup>;
}
