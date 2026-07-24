import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';

export interface AccordionProps {
  /** The content of the component, normally an AccordionSummary followed by AccordionDetails. */
  children?: React.ReactNode;
  /**
   * If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.
   * @uxpinbind onChange 1
   */
  expanded?: boolean;
  /** If true, expands the accordion by default. */
  defaultExpanded?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, it removes the margin between two expanded accordion items and the increase of height. */
  disableGutters?: boolean;
  /** Callback fired when the expand/collapse state is changed. */
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
  /** Shadow depth. It accepts values between 0 and 24 inclusive. */
  elevation?: number;
  /** The variant to use. */
  variant?: 'elevation' | 'outlined';
  /** If true, rounded corners are disabled. */
  square?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-accordion/
 * @uxpindescription An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
 */
export default function Accordion(props: AccordionProps) {
  // elevation only applies to variant="elevation" — MUI warns otherwise
  const { variant, elevation, ...other } = props;
  return (
    <MuiAccordion {...other} variant={variant} elevation={variant === 'outlined' ? undefined : elevation}>
      {props.children ?? []}
    </MuiAccordion>
  );
}
