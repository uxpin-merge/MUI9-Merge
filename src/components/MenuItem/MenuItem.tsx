import * as React from 'react';
import MuiMenuItem from '@mui/material/MenuItem';

export interface MenuItemProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** The value of the menu item (useful inside a Select). Each MenuItem should have a unique value. */
  value?: string;
  /** If true, the component is selected. */
  selected?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, compact vertical padding designed for keyboard and mouse input is used. */
  dense?: boolean;
  /** If true, the left and right padding is removed. */
  disableGutters?: boolean;
  /** If true, a 1px light border is added to the bottom of the menu item. */
  divider?: boolean;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/menu-item/
 * @uxpindescription A single choice inside a Menu, MenuList or Select.
 */
export default function MenuItem(props: MenuItemProps) {
  return <MuiMenuItem {...props}>{props.children}</MuiMenuItem>;
}
