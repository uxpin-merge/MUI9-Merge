import * as React from 'react';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

export interface AccordionSummaryProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** The icon to display as the expand indicator (use MaterialIcon/Icon). */
  expandIcon?: React.ReactNode;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/accordion-summary/
 * @uxpindescription The clickable header of an Accordion that toggles its expanded state.
 */
export default function AccordionSummary(props: AccordionSummaryProps) {
  return <MuiAccordionSummary {...props}>{props.children}</MuiAccordionSummary>;
}
