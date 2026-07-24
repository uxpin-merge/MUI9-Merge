import * as React from 'react';
import MuiFormHelperText from '@mui/material/FormHelperText';

export interface FormHelperTextProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** If true, the helper text is displayed in a disabled state. */
  disabled?: boolean;
  /** If true, the helper text is displayed in an error state. */
  error?: boolean;
  /** If true, the helper text is displayed in a focused state. */
  focused?: boolean;
  /** If true, the helper text uses the required styling. */
  required?: boolean;
  /** If dense, adjusts vertical spacing. Normally obtained via context from FormControl. */
  margin?: 'dense';
  /** The variant to use. */
  variant?: 'filled' | 'outlined' | 'standard';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/form-helper-text/
 * @uxpindescription Helper text displayed under a form input, usually inside a FormControl.
 */
export default function FormHelperText(props: FormHelperTextProps) {
  // v9 replaced margin="dense" with size="small" — keep the old control working
  const { margin, ...other } = props;
  return (
    <MuiFormHelperText {...other} {...(margin === 'dense' ? { size: 'small' as const } : {})}>
      {props.children}
    </MuiFormHelperText>
  );
}
