import * as React from 'react';
import MuiTooltip from '@mui/material/Tooltip';

export interface TooltipProps {
  /** Elements contained by the Tooltip. */
  children?: React.ReactNode;
  /** Text to display in the Tooltip. */
  title?: string;
  /** Where the Tooltip should display in relation to its nested element. */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  /** If true, adds an arrow to the tooltip. */
  arrow?: boolean;
  /** If true, the tooltip is shown. Leave unset for the default hover behavior. */
  open?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-tooltip/
 * @uxpindescription Tooltips display informative text when users hover over, focus on, or tap an element.
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function Tooltip(props: TooltipProps) {
  const { children, title, ...other } = props;
  return (
    <MuiTooltip title={title ?? ''} {...other}>
      <div>{children}</div>
    </MuiTooltip>
  );
}
