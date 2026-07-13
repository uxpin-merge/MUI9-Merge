import * as React from 'react';
import MuiImageListItem from '@mui/material/ImageListItem';

export interface ImageListItemProps {
  /** The content of the component, normally an image. */
  children?: React.ReactNode;
  /** Width of the item in number of grid columns. */
  cols?: number;
  /** Height of the item in number of grid rows. */
  rows?: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/image-list-item/
 * @uxpindescription A single item to be used inside the ImageList component.
 */
export default function ImageListItem(props: ImageListItemProps) {
  return <MuiImageListItem {...props}>{props.children}</MuiImageListItem>;
}
