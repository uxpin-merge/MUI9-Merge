import * as React from 'react';
import MuiImageList from '@mui/material/ImageList';

export interface ImageListProps {
  /** The content of the component, normally ImageListItems. */
  children?: React.ReactNode;
  /** The variant to use. */
  variant?: 'masonry' | 'quilted' | 'standard' | 'woven';
  /** Number of columns. */
  cols?: number;
  /** The gap between items in px. */
  gap?: number;
  /** The height of one row in px. */
  rowHeight?: number | 'auto';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-image-list/
 * @uxpindescription Image lists display a collection of images in an organized grid.
 */
export default function ImageList(props: ImageListProps) {
  return <MuiImageList {...props}>{props.children ?? []}</MuiImageList>;
}
