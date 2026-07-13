import * as React from 'react';
import MuiInputAdornment from '@mui/material/InputAdornment';

export interface InputAdornmentProps {
  /** The content of the component, normally an IconButton, Icon or string. */
  children?: React.ReactNode;
  /** The position this adornment should appear relative to the Input. */
  position?: 'start' | 'end';
  /** Disable pointer events on the root so clicking the adornment focuses the input. */
  disablePointerEvents?: boolean;
  /** If children is a string, disable wrapping it in a Typography component. */
  disableTypography?: boolean;
  /** The variant to use. Not needed inside a TextField or FormControl. */
  variant?: 'filled' | 'outlined' | 'standard';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/input-adornment/
 * @uxpindescription Decorates an input with a prefix or suffix such as an icon or unit.
 */
export default function InputAdornment(props: InputAdornmentProps) {
  return (
    <MuiInputAdornment {...props} position={props.position ?? 'start'}>
      {props.children}
    </MuiInputAdornment>
  );
}
