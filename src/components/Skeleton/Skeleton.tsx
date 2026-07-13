import * as React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';

export interface SkeletonProps {
  /** The type of content that will be rendered. */
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
  /** Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own. */
  width?: number | string;
  /** Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card. */
  height?: number | string;
  /** The animation. If false the animation effect is disabled. */
  animation?: 'pulse' | 'wave' | false;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-skeleton/
 * @uxpindescription Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
 */
export default function Skeleton(props: SkeletonProps) {
  return <MuiSkeleton {...props} />;
}
