import * as React from 'react';
import MuiButton from '@mui/material/Button';

export interface ButtonProps {
  /** The label of the button. */
  children?: React.ReactNode;
  /** The id of the element. Useful as anchor for Menu and other positioned elements. */
  id?: string;
  /** The color of the button. */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** The variant to use. */
  variant?: 'text' | 'outlined' | 'contained';
  /** The size of the button. */
  size?: 'small' | 'medium' | 'large';
  /** If true, the button is disabled. */
  disabled?: boolean;
  /** If true, the button shows a loading indicator (replaces the old LoadingButton). */
  loading?: boolean;
  /** The loading indicator position (only with startIcon/endIcon). */
  loadingPosition?: 'start' | 'end' | 'center';
  /** If true, no elevation is used. */
  disableElevation?: boolean;
  /** If true, the button takes the full width of its container. */
  fullWidth?: boolean;
  /** Element placed before the children (use MaterialIcon/Icon). */
  startIcon?: React.ReactNode;
  /** Element placed after the children (use MaterialIcon/Icon). */
  endIcon?: React.ReactNode;
  /** The URL to link to when the button is clicked. */
  href?: string;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-button/
 * @uxpindescription Buttons allow users to take actions, and make choices, with a single tap. Includes the loading state (LoadingButton is folded into Button in MUI v9).
 */
export default function Button(props: ButtonProps) {
  return <MuiButton {...props}>{props.children}</MuiButton>;
}
