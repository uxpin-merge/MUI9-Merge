import * as React from 'react';
import MuiMasonry from '@mui/lab/Masonry';

export interface MasonryProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** Number of columns. */
  columns?: number;
  /** Defines the space between children. It is a factor of the theme's spacing. */
  spacing?: number;
  /** Allows using sequential order rather than adding to the shortest column. */
  sequential?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-masonry/
 * @uxpindescription Masonry lays out contents of varying dimensions as blocks of the same width and different height with configurable gaps.
 */
export default function Masonry(props: MasonryProps) {
  return <MuiMasonry {...props}>{props.children ?? []}</MuiMasonry>;
}
