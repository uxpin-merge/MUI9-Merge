import * as React from 'react';
import MuiGrow from '@mui/material/Grow';

export interface GrowProps {
  /** A single child content element. */
  children?: React.ReactNode;
  /** If true, the component will transition in. */
  in?: boolean;
  /** The duration for the transition, in milliseconds. */
  timeout?: number;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/grow/
 * @uxpindescription Expands outwards from the center of the child element, while also fading in from transparent to opaque.
 */
export default function Grow(props: GrowProps) {
  const { children, ...other } = props;
  return (
    <MuiGrow {...other}>
      <div>{children}</div>
    </MuiGrow>
  );
}
