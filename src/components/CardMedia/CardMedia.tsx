import * as React from 'react';
import MuiCardMedia, { CardMediaProps as MuiCardMediaProps } from '@mui/material/CardMedia';

export interface CardMediaProps {
  /** The component used for the root node. */
  component?: 'img' | 'video' | 'audio';
  /**
   * Image to be displayed as a background image. Either image or src prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   * @uxpincontroltype image
   */
  image?: string;
  /** An alias for the image property, passed as src to media components (video, audio, img). */
  src?: string;
  /** The height of the media in px. */
  height?: number;
  /** Alternative text description of the image. */
  alt?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/card-media/
 * @uxpindescription Displays an image, video or audio as part of a Card.
 */
export default function CardMedia(props: CardMediaProps) {
  return <MuiCardMedia {...(props as MuiCardMediaProps<'img'>)} />;
}
