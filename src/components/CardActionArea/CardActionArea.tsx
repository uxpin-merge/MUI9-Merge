import * as React from 'react';
import MuiCardActionArea from '@mui/material/CardActionArea';

export interface CardActionAreaProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/card-action-area/
 * @uxpindescription Makes an entire area of a Card clickable.
 */
export default function CardActionArea(props: CardActionAreaProps) {
  return <MuiCardActionArea {...props}>{props.children}</MuiCardActionArea>;
}
