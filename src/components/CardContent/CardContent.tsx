import * as React from 'react';
import MuiCardContent from '@mui/material/CardContent';

export interface CardContentProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/card-content/
 * @uxpindescription The wrapper for the main content of a Card.
 */
export default function CardContent(props: CardContentProps) {
  return <MuiCardContent {...props}>{props.children}</MuiCardContent>;
}
