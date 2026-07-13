import * as React from 'react';
import MuiButtonBase from '@mui/material/ButtonBase';

export interface ButtonBaseProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the ripple effect is disabled. */
  disableRipple?: boolean;
  /** The URL to link to when the button is clicked. */
  href?: string;
  /** The component used for the root node. */
  component?: React.ElementType;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/button-base/
 * @uxpindescription The low-level button building block with ripple support. Use to make any content clickable.
 */
export default function ButtonBase(props: ButtonBaseProps) {
  return <MuiButtonBase {...props}>{props.children}</MuiButtonBase>;
}
