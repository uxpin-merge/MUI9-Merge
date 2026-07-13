import * as React from 'react';
import MuiList from '@mui/material/List';

export interface ListProps {
  /** The content of the component, normally ListItem components. */
  children?: React.ReactNode;
  /** If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. */
  dense?: boolean;
  /** If true, vertical padding is removed from the list. */
  disablePadding?: boolean;
  /** The content of the subheader, normally a ListSubheader component. */
  subheader?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-list/
 * @uxpindescription Lists are continuous, vertical indexes of text or images.
 */
export default function List(props: ListProps) {
  return <MuiList {...props}>{props.children}</MuiList>;
}
