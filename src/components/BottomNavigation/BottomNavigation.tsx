import * as React from 'react';
import MuiBottomNavigation from '@mui/material/BottomNavigation';

export interface BottomNavigationProps {
  /** The content of the component, normally BottomNavigationActions. */
  children?: React.ReactNode;
  /**
   * The value of the currently selected BottomNavigationAction.
   * @uxpinbind onChange 1
   */
  value?: string;
  /** Callback fired when the value changes. */
  onChange?: (event: React.SyntheticEvent, value: string) => void;
  /** If true, all BottomNavigationActions will show their labels. By default, only the selected one shows its label. */
  showLabels?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-bottom-navigation/
 * @uxpindescription The Bottom Navigation bar allows movement between primary destinations in an app.
 */
export default function BottomNavigation(props: BottomNavigationProps) {
  return <MuiBottomNavigation {...props}>{props.children}</MuiBottomNavigation>;
}
