import * as React from 'react';
import Accordion from '../Accordion';
import AccordionSummary from '../../AccordionSummary/AccordionSummary';
import AccordionDetails from '../../AccordionDetails/AccordionDetails';
import Typography from '../../Typography/Typography';
import Icon from '../../Icon/Icon';

export default (
  <Accordion uxpId="accordion-1" elevation={1}>
    <AccordionSummary uxpId="accordion-summary-1" expandIcon={<Icon uxpId="accordion-icon-1">expand_more</Icon>}>
      <Typography uxpId="accordion-summary-typography-1">Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails uxpId="accordion-details-1">
      <Typography uxpId="accordion-details-typography-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
);
