import * as React from 'react';
import MuiListSubheader from '@mui/material/ListSubheader';

export interface ListSubheaderProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** The color of the Subheader. */
  color?: 'default' | 'inherit' | 'primary';
  /** If true, the left and right padding is removed. */
  disableGutters?: boolean;
  /** If true, the List Subheader will not stick to the top during scroll. */
  disableSticky?: boolean;
  /** If true, the List Subheader is indented. */
  inset?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/list-subheader/
 * @uxpindescription A label for a section of a List.
 */
export default function ListSubheader(props: ListSubheaderProps) {
  return <MuiListSubheader {...props}>{props.children}</MuiListSubheader>;
}
