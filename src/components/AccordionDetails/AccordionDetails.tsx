import * as React from 'react';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export interface AccordionDetailsProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/accordion-details/
 * @uxpindescription The content container of an Accordion, shown when the accordion is expanded.
 */
export default function AccordionDetails(props: AccordionDetailsProps) {
  return <MuiAccordionDetails {...props}>{props.children}</MuiAccordionDetails>;
}
