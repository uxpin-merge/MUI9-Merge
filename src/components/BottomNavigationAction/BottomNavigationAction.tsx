import * as React from 'react';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';

export interface BottomNavigationActionProps {
  /** The label element. */
  label?: React.ReactNode;
  /** You can provide your own value. Otherwise, we fallback to the child position index. */
  value?: string;
  /** The icon to display (use MaterialIcon/Icon). */
  icon?: React.ReactNode;
  /** If true, the BottomNavigationAction will show its label. By default, only the selected one inside a BottomNavigation shows its label. */
  showLabel?: boolean;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/bottom-navigation-action/
 * @uxpindescription A single destination to be used inside the BottomNavigation component.
 */
export default function BottomNavigationAction(props: BottomNavigationActionProps) {
  return <MuiBottomNavigationAction {...props} />;
}
