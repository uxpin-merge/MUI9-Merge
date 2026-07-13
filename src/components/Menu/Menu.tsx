import * as React from 'react';
import MuiMenu from '@mui/material/Menu';

export interface MenuProps {
  /** Menu contents, normally MenuItems. */
  children?: React.ReactNode;
  /** If true, the component is shown. */
  open?: boolean;
  /** Enter the CSS selector of the component that acts as the trigger (e.g. '#my-button-id') -- it is used to set the position of the menu. */
  anchorEl?: string;
  /** If true (default), focuses the menu list when no focusable child is found. */
  autoFocus?: boolean;
  /** When opening the menu, will not focus the active item but the menu list itself. */
  disableAutoFocusItem?: boolean;
  /** Callback fired when the component requests to be closed. The reason can be "escapeKeyDown", "backdropClick" or "tabKeyDown". */
  onClose?: (event: React.SyntheticEvent, reason: 'backdropClick' | 'escapeKeyDown' | 'tabKeyDown') => void;
  /** The variant to use. Use menu to prevent selected items from impacting the initial focus. */
  variant?: 'menu' | 'selectedMenu';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-menu/
 * @uxpindescription Menus display a list of choices on temporary surfaces.
 */
export default function Menu(props: MenuProps) {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => setOpen(props.open), [props]);

  return (
    <MuiMenu
      {...props}
      open={!!open}
      onBlur={() => setOpen(false)}
      anchorEl={props.anchorEl ? document.querySelector(props.anchorEl) : undefined}
    >
      {props.children}
    </MuiMenu>
  );
}
