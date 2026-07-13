import * as React from 'react';
import MuiListItemButton from '@mui/material/ListItemButton';

export interface ListItemButtonProps {
  /** The content of the component. Text or nested components. */
  children?: React.ReactNode;
  /** Use to apply selected styling. */
  selected?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** Defines the align-items style property. */
  alignItems?: 'center' | 'flex-start';
  /** If true, compact vertical padding designed for keyboard and mouse input is used. */
  dense?: boolean;
  /** If true, the left and right padding is removed. */
  disableGutters?: boolean;
  /** If true, a 1px light border is added to the bottom of the list item. */
  divider?: boolean;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/list-item-button/
 * @uxpindescription An action element inside a ListItem, with hover, selected and disabled states.
 */
export default function ListItemButton(props: ListItemButtonProps) {
  return <MuiListItemButton {...props}>{props.children}</MuiListItemButton>;
}
