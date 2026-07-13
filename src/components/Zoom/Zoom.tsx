import * as React from 'react';
import MuiZoom from '@mui/material/Zoom';

export interface ZoomProps {
  /** A single child content element. */
  children?: React.ReactNode;
  /** If true, the component will transition in. */
  in?: boolean;
  /** The duration for the transition, in milliseconds. */
  timeout?: number;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/zoom/
 * @uxpindescription Expands outwards from the center of the child element.
 */
export default function Zoom(props: ZoomProps) {
  const { children, ...other } = props;
  return (
    <MuiZoom {...other}>
      <div>{children}</div>
    </MuiZoom>
  );
}
