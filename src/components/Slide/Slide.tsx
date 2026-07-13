import * as React from 'react';
import MuiSlide from '@mui/material/Slide';

export interface SlideProps {
  /** A single child content element. */
  children?: React.ReactNode;
  /** If true, the component will transition in. */
  in?: boolean;
  /** Direction the child node will enter from. */
  direction?: 'down' | 'left' | 'right' | 'up';
  /** The duration for the transition, in milliseconds. */
  timeout?: number;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/slide/
 * @uxpindescription Slide in from the edge of the screen. The direction prop controls which edge of the screen the transition starts from.
 */
export default function Slide(props: SlideProps) {
  const { children, ...other } = props;
  return (
    <MuiSlide {...other}>
      <div>{children}</div>
    </MuiSlide>
  );
}
