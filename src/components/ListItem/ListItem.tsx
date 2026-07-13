import * as React from 'react';
import MuiListItem from '@mui/material/ListItem';

export interface ListItemProps {
  /** The content of the component. Text or nested components. */
  children?: React.ReactNode;
  /** The element to display at the end of the ListItem (e.g. an IconButton). */
  secondaryAction?: React.ReactNode;
  /** Defines the align-items style property. */
  alignItems?: 'center' | 'flex-start';
  /** If true, compact vertical padding designed for keyboard and mouse input is used. */
  dense?: boolean;
  /** If true, the left and right padding is removed. */
  disableGutters?: boolean;
  /** If true, all padding is removed. */
  disablePadding?: boolean;
  /** If true, a 1px light border is added to the bottom of the list item. */
  divider?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/list-item/
 * @uxpindescription A wrapper for list item content, normally holding a ListItemButton or ListItemText.
 */
export default function ListItem(props: ListItemProps) {
  return <MuiListItem {...props}>{props.children}</MuiListItem>;
}
