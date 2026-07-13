import * as React from 'react';
import MuiFormControlLabel from '@mui/material/FormControlLabel';

export interface FormControlLabelProps {
  /** A control element: a Radio, a Switch or a Checkbox. */
  control?: React.ReactElement;
  /** A text or an element to be used in an enclosing label element. */
  label?: React.ReactNode;
  /** The position of the label. */
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top';
  /** If true, the control is disabled. */
  disabled?: boolean;
  /** If true, the component appears selected. */
  checked?: boolean;
  /** If true, the label indicates that the input is required. */
  required?: boolean;
  /** The value of the component (used by RadioGroup to identify the selected control). */
  value?: string;
  /** Callback fired when the state is changed. The new checked state is available as event.target.checked. */
  onChange?: (event: React.SyntheticEvent, checked: boolean) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/form-control-label/
 * @uxpindescription Adds a label to a control such as a Checkbox, Radio or Switch.
 */
export default function FormControlLabel(props: FormControlLabelProps) {
  return <MuiFormControlLabel {...props} label={props.label} control={props.control ?? <span />} />;
}
