import * as React from 'react';
import MuiListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

export interface ListItemSecondaryActionProps {
  /** The content of the component, normally an IconButton or selection control. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/list-item-secondary-action/
 * @uxpindescription An action rendered at the end of a ListItem. Must be used as the last child of ListItem.
 */
export default function ListItemSecondaryAction(props: ListItemSecondaryActionProps) {
  return <MuiListItemSecondaryAction {...props}>{props.children}</MuiListItemSecondaryAction>;
}
