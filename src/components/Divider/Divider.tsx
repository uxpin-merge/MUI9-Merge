import * as React from 'react';
import MuiDivider from '@mui/material/Divider';

export interface DividerProps {
  /** Optional label rendered inside the divider. */
  children?: React.ReactNode;
  /** The divider orientation. */
  orientation?: 'horizontal' | 'vertical';
  /** The variant to use. */
  variant?: 'fullWidth' | 'inset' | 'middle';
  /** The text alignment when children are provided. */
  textAlign?: 'center' | 'left' | 'right';
  /** If true, a vertical divider will have the correct height when used in flex container. */
  flexItem?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-divider/
 * @uxpindescription A thin line that groups content in lists and layouts.
 */
export default function Divider(props: DividerProps) {
  return <MuiDivider {...props}>{props.children}</MuiDivider>;
}
