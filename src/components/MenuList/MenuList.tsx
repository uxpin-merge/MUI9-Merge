import * as React from 'react';
import MuiMenuList from '@mui/material/MenuList';

export interface MenuListProps {
  /** MenuList contents, normally MenuItems. */
  children?: React.ReactNode;
  /** If true, will focus the menu list container and move into tab order. */
  autoFocus?: boolean;
  /** If true, will focus the first menu item if variant="menu" or the selected item if variant="selectedMenu". */
  autoFocusItem?: boolean;
  /** If true, will allow focus on disabled items. */
  disabledItemsFocusable?: boolean;
  /** If true, the menu items will not wrap focus. */
  disableListWrap?: boolean;
  /** If true, compact vertical padding designed for keyboard and mouse input is used. */
  dense?: boolean;
  /** The variant to use. Use menu to prevent selected items from impacting the initial focus. */
  variant?: 'menu' | 'selectedMenu';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/menu-list/
 * @uxpindescription A permanently visible list of menu choices, normally composed of MenuItems.
 */
export default function MenuList(props: MenuListProps) {
  return <MuiMenuList {...props}>{props.children}</MuiMenuList>;
}
