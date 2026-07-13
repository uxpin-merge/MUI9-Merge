import * as React from 'react';
import MuiListItemIcon from '@mui/material/ListItemIcon';

export interface ListItemIconProps {
  /** The content of the component, normally Icon, SvgIcon or MaterialIcon. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/list-item-icon/
 * @uxpindescription A simple wrapper to apply list styles to an Icon inside a ListItem.
 */
export default function ListItemIcon(props: ListItemIconProps) {
  return <MuiListItemIcon {...props}>{props.children}</MuiListItemIcon>;
}
