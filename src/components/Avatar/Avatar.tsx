import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';

export interface AvatarProps {
  /** Used to render icon or text elements inside the Avatar if src is not set. This can be an element, or just a string. */
  children?: React.ReactNode;
  /** The id of the element. Useful as anchor for Menu and other positioned elements. */
  id?: string;
  /**
   * The image URL source.
   * @uxpincontroltype image
   */
  src?: string;
  /** Used in combination with `src` to provide an alt attribute for the rendered `img` element. */
  alt?: string;
  /** The shape of the avatar. */
  variant?: 'circular' | 'rounded' | 'square';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-avatar/
 * @uxpindescription Avatars are found throughout material design with uses in everything from tables to dialog menus.
 */
export default function Avatar(props: AvatarProps) {
  return <MuiAvatar {...props}>{props.children}</MuiAvatar>;
}
