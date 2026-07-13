import * as React from 'react';
import MuiContainer from '@mui/material/Container';

export interface ContainerProps {
  /** The content of the container. */
  children?: React.ReactNode;
  /** Determine the max-width of the container. */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  /** If true, the left and right padding is removed. */
  disableGutters?: boolean;
  /** Set the max-width to match the min-width of the current breakpoint. */
  fixed?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-container/
 * @uxpindescription Centers your content horizontally. It's the most basic layout element.
 */
export default function Container(props: ContainerProps) {
  return <MuiContainer {...props}>{props.children}</MuiContainer>;
}
