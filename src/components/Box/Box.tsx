import * as React from 'react';
import MuiBox from '@mui/material/Box';

export interface BoxProps {
  /** The content of the box. */
  children?: React.ReactNode;
  /** The component used for the root node (e.g. 'div', 'img', 'section'). */
  component?: React.ElementType;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-box/
 * @uxpindescription A generic container for grouping other components. Style it via the sx prop.
 */
export default function Box(props: BoxProps) {
  return <MuiBox {...props}>{props.children}</MuiBox>;
}
