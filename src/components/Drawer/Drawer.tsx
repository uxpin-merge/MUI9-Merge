import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';

export interface DrawerProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** Side from which the drawer will appear. */
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  /** The variant to use. */
  variant?: 'permanent' | 'persistent' | 'temporary';
  /** If true, the component is shown. */
  open?: boolean;
  /** The elevation of the drawer. */
  elevation?: number;
  /** If true, the backdrop is not rendered. */
  hideBackdrop?: boolean;
  /** Callback fired when the component requests to be closed. The reason can be "escapeKeyDown" or "backdropClick". */
  onClose?: (event: React.SyntheticEvent, reason: 'backdropClick' | 'escapeKeyDown') => void;
  /**
   * @uxpinignoreprop
   * UXPin-injected callback used to sync the open prop back to the editor.
   */
  uxpinOnChange?: (prevValue: unknown, nextValue: unknown, propName: string) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpinuseportal props.variant === "temporary"
 * @uxpindocurl https://mui.com/material-ui/react-drawer/
 * @uxpindescription The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.
 */
export default function Drawer(props: DrawerProps) {
  const { uxpinOnChange, ...other } = props;

  return (
    <MuiDrawer
      {...other}
      onBlur={() => {
        uxpinOnChange?.(true, false, 'open');
      }}
    >
      {props.children}
    </MuiDrawer>
  );
}
