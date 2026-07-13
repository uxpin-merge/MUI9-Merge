import * as React from 'react';
import MuiCollapse from '@mui/material/Collapse';

export interface CollapseProps {
  /** The content node to be collapsed. */
  children?: React.ReactNode;
  /** If true, the component will transition in. */
  in?: boolean;
  /** The transition orientation. */
  orientation?: 'horizontal' | 'vertical';
  /** The width (horizontal) or height (vertical) of the container when collapsed, e.g. '30px'. */
  collapsedSize?: string | number;
  /** The duration for the transition, in milliseconds. */
  timeout?: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/collapse/
 * @uxpindescription Expand from the start edge of the child element. Use the orientation prop for a horizontal collapse.
 */
export default function Collapse(props: CollapseProps) {
  return <MuiCollapse {...props}>{props.children}</MuiCollapse>;
}
