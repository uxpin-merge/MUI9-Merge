import * as React from 'react';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';

export interface ListItemAvatarProps {
  /** The content of the component, normally an Avatar. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/list-item-avatar/
 * @uxpindescription A simple wrapper to apply list styles to an Avatar inside a ListItem.
 */
export default function ListItemAvatar(props: ListItemAvatarProps) {
  return <MuiListItemAvatar {...props}>{props.children}</MuiListItemAvatar>;
}
