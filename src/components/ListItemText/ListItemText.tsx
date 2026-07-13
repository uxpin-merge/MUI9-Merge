import * as React from 'react';
import MuiListItemText from '@mui/material/ListItemText';

export interface ListItemTextProps {
  /** The main copy. */
  primary?: React.ReactNode;
  /** The secondary content element. */
  secondary?: React.ReactNode;
  /** If true, the children will be indented. This should be used if there is no left avatar or left icon. */
  inset?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/list-item-text/
 * @uxpindescription The primary and secondary text of a ListItem.
 */
export default function ListItemText(props: ListItemTextProps) {
  return <MuiListItemText {...props} />;
}
