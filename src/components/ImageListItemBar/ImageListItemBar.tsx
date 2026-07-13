import * as React from 'react';
import MuiImageListItemBar from '@mui/material/ImageListItemBar';

export interface ImageListItemBarProps {
  /** Title to be displayed. */
  title?: React.ReactNode;
  /** String or element serving as subtitle (support text). */
  subtitle?: React.ReactNode;
  /** Position of the title bar. */
  position?: 'below' | 'top' | 'bottom';
  /** An IconButton element to be used as secondary action target (primary action target is the item itself). */
  actionIcon?: React.ReactNode;
  /** Position of the secondary action IconButton. */
  actionPosition?: 'left' | 'right';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/image-list-item-bar/
 * @uxpindescription An overlay title bar for an ImageListItem, with optional subtitle and action icon.
 */
export default function ImageListItemBar(props: ImageListItemBarProps) {
  return <MuiImageListItemBar {...props} />;
}
