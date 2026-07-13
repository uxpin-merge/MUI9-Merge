import * as React from 'react';
import MuiCardActions from '@mui/material/CardActions';

export interface CardActionsProps {
  /** The content of the component, normally Buttons. */
  children?: React.ReactNode;
  /** If true, the actions do not have additional margin. */
  disableSpacing?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/card-actions/
 * @uxpindescription A container for action buttons at the bottom of a Card.
 */
export default function CardActions(props: CardActionsProps) {
  return <MuiCardActions {...props}>{props.children}</MuiCardActions>;
}
