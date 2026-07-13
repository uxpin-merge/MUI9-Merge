import * as React from 'react';
import MuiFab from '@mui/material/Fab';

export interface FloatingActionButtonProps {
  /** The content of the FAB: an icon, or text with the 'extended' variant. */
  children?: React.ReactNode;
  /** The color of the component. */
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** The variant to use. */
  variant?: 'circular' | 'extended';
  /** The size of the component. */
  size?: 'small' | 'medium' | 'large';
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** The URL to link to when the button is clicked. */
  href?: string;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-floating-action-button/
 * @uxpindescription A floating action button performs the primary action on a screen.
 */
export default function FloatingActionButton(props: FloatingActionButtonProps) {
  return <MuiFab {...props}>{props.children}</MuiFab>;
}
