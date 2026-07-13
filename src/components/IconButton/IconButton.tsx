import * as React from 'react';
import MuiIconButton from '@mui/material/IconButton';

export interface IconButtonProps {
  /** The icon to display (use MaterialIcon/Icon). */
  children?: React.ReactNode;
  /** The id of the element. Useful as anchor for Menu and other positioned elements. */
  id?: string;
  /** The color of the component. */
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** The size of the component. */
  size?: 'small' | 'medium' | 'large';
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the button shows a loading indicator. */
  loading?: boolean;
  /** If given, uses a negative margin to counteract the padding on one side. */
  edge?: 'start' | 'end' | false;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-button/#icon-button
 * @uxpindescription Icon buttons are commonly found in app bars and toolbars.
 */
export default function IconButton(props: IconButtonProps) {
  return <MuiIconButton {...props}>{props.children}</MuiIconButton>;
}
