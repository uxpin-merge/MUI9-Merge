import * as React from 'react';
import MuiLink from '@mui/material/Link';

export interface LinkProps {
  /** The content of the link. */
  children?: React.ReactNode;
  /** The URL to link to. */
  href?: string;
  /** Controls when the link should have an underline. */
  underline?: 'none' | 'hover' | 'always';
  /** The color of the link (theme token path, e.g. 'primary', 'text.secondary'). */
  color?: string;
  /** Applies the theme typography styles. */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  /** Where to open the linked document. */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-link/
 * @uxpindescription The Link component allows you to customize anchor elements with theme colors and typography styles.
 */
export default function Link(props: LinkProps) {
  return <MuiLink {...props}>{props.children}</MuiLink>;
}
