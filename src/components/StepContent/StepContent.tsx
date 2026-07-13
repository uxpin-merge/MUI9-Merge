import * as React from 'react';
import MuiStepContent from '@mui/material/StepContent';

export interface StepContentProps {
  /** The content of the step. */
  children?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/step-content/
 * @uxpindescription The content of a Step, shown when the step is active. Intended for vertical steppers only.
 */
export default function StepContent(props: StepContentProps) {
  return <MuiStepContent {...props}>{props.children}</MuiStepContent>;
}
