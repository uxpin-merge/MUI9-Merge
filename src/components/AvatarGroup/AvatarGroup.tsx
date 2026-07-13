import * as React from 'react';
import MuiAvatarGroup from '@mui/material/AvatarGroup';

export interface AvatarGroupProps {
  /** The avatars to stack. */
  children?: React.ReactNode;
  /** Max avatars to show before +x. */
  max?: number;
  /** The total number of avatars. Used for calculating the number of extra avatars. */
  total?: number;
  /** Spacing between avatars ('small', 'medium' or a number in pixels). */
  spacing?: 'small' | 'medium' | number;
  /** The variant to use. */
  variant?: 'circular' | 'rounded' | 'square';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-avatar/#grouped
 * @uxpindescription AvatarGroup renders its children as a stack and shows the surplus as a +x avatar.
 */
export default function AvatarGroup(props: AvatarGroupProps) {
  return <MuiAvatarGroup {...props}>{props.children}</MuiAvatarGroup>;
}
