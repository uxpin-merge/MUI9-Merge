import * as React from 'react';
import MuiFormGroup from '@mui/material/FormGroup';

export interface FormGroupProps {
  /** The content of the component: usually FormControlLabel elements wrapping Checkbox or Switch controls. */
  children?: React.ReactNode;
  /** Display the group of elements in a compact row. */
  row?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/form-group/
 * @uxpindescription FormGroup wraps controls such as Checkbox and Switch and provides compact row or column layout.
 */
export default function FormGroup(props: FormGroupProps) {
  return <MuiFormGroup {...props}>{props.children}</MuiFormGroup>;
}
