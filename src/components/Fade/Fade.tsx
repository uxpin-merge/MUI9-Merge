import * as React from 'react';
import MuiFade from '@mui/material/Fade';

export interface FadeProps {
  /** A single child content element. */
  children?: React.ReactNode;
  /** If true, the component will transition in. */
  in?: boolean;
  /** The duration for the transition, in milliseconds. */
  timeout?: number;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/fade/
 * @uxpindescription Fade in from transparent to opaque.
 */
export default function Fade(props: FadeProps) {
  const { children, ...other } = props;
  return (
    <MuiFade {...other}>
      <div>{children}</div>
    </MuiFade>
  );
}
