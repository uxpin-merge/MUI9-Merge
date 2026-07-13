import * as React from 'react';
import MuiBadge from '@mui/material/Badge';

export interface BadgeProps {
  /** The badge will be added relative to this node. */
  children?: React.ReactNode;
  /** The content rendered within the badge. */
  badgeContent?: React.ReactNode;
  /** The color of the component. */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** The variant to use. */
  variant?: 'standard' | 'dot';
  /** Max count to show. */
  max?: number;
  /** If true, the badge is invisible. */
  invisible?: boolean;
  /** Wrapped shape the badge should overlap. */
  overlap?: 'rectangular' | 'circular';
  /** The anchor of the badge. */
  anchorOrigin?: {
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
  };
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-badge/
 * @uxpindescription Badge generates a small badge to the top-right of its child(ren).
 */
export default function Badge(props: BadgeProps) {
  return <MuiBadge {...props}>{props.children}</MuiBadge>;
}
