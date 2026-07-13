import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

export interface AppBarProps {
  /** The content of the component, usually a Toolbar. */
  children?: React.ReactNode;
  /** The positioning type. Note: sticky is not universally supported and will fall back to static when unavailable. */
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  /** The color of the component. It supports those theme colors that make sense for this component. */
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent' | 'error' | 'info' | 'success' | 'warning';
  /** Shadow depth. It accepts values between 0 and 24 inclusive. */
  elevation?: number;
  /** If true, the color prop is applied in dark mode. */
  enableColorOnDark?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-app-bar/
 * @uxpindescription The App Bar displays information and actions relating to the current screen.
 */
export default function AppBar(props: AppBarProps) {
  return <MuiAppBar {...props}>{props.children}</MuiAppBar>;
}
