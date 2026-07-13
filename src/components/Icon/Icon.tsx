import * as React from 'react';
import MuiIcon from '@mui/material/Icon';

export interface IconProps {
  /** The name of the Material icon (font ligature), e.g. 'star', 'delete', 'add_circle'. */
  children?: React.ReactNode;
  /** The color of the component. */
  color?: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The fontSize applied to the icon. */
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
  /** The base class applied to the icon, switches between icon font variants. */
  baseClassName?:
    | 'material-icons'
    | 'material-icons-outlined'
    | 'material-icons-rounded'
    | 'material-icons-sharp'
    | 'material-icons-two-tone';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/icons/#icon-font-icons
 * @uxpindescription Displays a Material Icons font ligature, e.g. 'star' or 'delete'.
 */
export default function Icon(props: IconProps) {
  return <MuiIcon {...props}>{props.children}</MuiIcon>;
}
