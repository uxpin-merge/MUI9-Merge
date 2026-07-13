import * as React from 'react';
import MuiAccordionActions from '@mui/material/AccordionActions';

export interface AccordionActionsProps {
  /** The content of the component, normally Buttons. */
  children?: React.ReactNode;
  /** If true, the actions do not have additional margin. */
  disableSpacing?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/accordion-actions/
 * @uxpindescription A container for action buttons at the bottom of an Accordion.
 */
export default function AccordionActions(props: AccordionActionsProps) {
  return <MuiAccordionActions {...props}>{props.children}</MuiAccordionActions>;
}
