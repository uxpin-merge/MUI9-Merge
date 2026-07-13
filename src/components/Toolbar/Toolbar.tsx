import * as React from 'react';
import MuiToolbar from '@mui/material/Toolbar';

export interface ToolbarProps {
  /** Toolbar children, usually a mixture of IconButton, Button and Typography. */
  children?: React.ReactNode;
  /** The variant to use. */
  variant?: 'regular' | 'dense';
  /** If true, disables gutter padding. */
  disableGutters?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/toolbar/
 * @uxpindescription The Toolbar displays actions relating to the current screen, usually a mixture of IconButton, Button and Typography.
 */
export default function Toolbar(props: ToolbarProps) {
  return <MuiToolbar {...props}>{props.children}</MuiToolbar>;
}
